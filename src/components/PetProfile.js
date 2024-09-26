import { useState, useEffect } from "react";

// Deliverable # 25 solution code
import { useParams, useOutletContext } from "react-router-dom";

function PetProfile(){

    // Deliverable # 26 solution code
    const { id } = useParams();

    // Deliverable # 27 solution code
    const { updatePet, deletePet } = useOutletContext();
    
    const [pet, setPet] = useState(null);
    const [displayAnimalType, setDisplayAnimalType] = useState(false);
    const [displayForm, setDisplayForm] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        animal_type: ""
    });

    useEffect(() => {
        // Deliverable # 28 solution code
        fetch(`http://localhost:4000/pets/${id}`)
        .then(response => response.json())
        .then(petData => setPet(petData));
    }, []);

    function toggleDisplayAnimalType(){
        setDisplayAnimalType(displayAnimalType => !displayAnimalType)
    }

    function handleAdoptButtonClick(){
        deletePet(pet.id);
        setPet(null);
    }

    function toggleDisplayForm(){
        setDisplayForm(displayForm => !displayForm)
    }

    function handleSubmit(event){
        event.preventDefault();

        updatePet(pet.id, formData);
        setPet({...pet, ...formData});

        toggleDisplayForm();
    }

    function updateFormData(event){
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    function handleLikeButtonClick(){
        const updatedLikesObject = {likes: pet.likes + 1};

        updatePet(pet.id, updatedLikesObject);

        setPet(pet => {
            return {...pet, likes: pet.likes + 1}
        });
    }

    return (
        <>
            {pet ?
            <div className="pet-profile">
                <img src={pet.image} alt={pet.name}/>
                <h4 onClick={toggleDisplayAnimalType} className={displayAnimalType ? "display-animal-type" : ""}>{displayAnimalType ? pet.animal_type : pet.name}</h4>
                { !displayForm ?
                <div className="button-div">
                    <button onClick={toggleDisplayForm} className="update-button">Update Pet</button>
                    <button onClick={handleLikeButtonClick} className="like-button">{pet.likes} Likes</button>
                    <br/>
                    <button onClick={handleAdoptButtonClick} className="adopt-button">Adopt</button>
                </div> :
                <form onSubmit={handleSubmit} className="edit-pet">
                    <input onChange={updateFormData} type="text" name="name" placeholder="Pet name" value={formData.name} />
                    <input onChange={updateFormData} type="text" name="image" placeholder="Image URL" value={formData.image} />
                    <input onChange={updateFormData} type="text" name="animal_type" placeholder="Animal type" value={formData.animal_type} />
                    <button type="submit">Save Changes</button>
                </form>
                }
            </div> :
            null
            }
        </>
    );
}

export default PetProfile;