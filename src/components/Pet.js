import { useState } from "react";

function Pet({pet, deletePet, updatePet}){

    const [displayAnimalType, setDisplayAnimalType] = useState(false)

    // Deliverable # 4 solution code
    const [formData, setFormData] = useState({
        name: pet.name,
        image: pet.image,
        animal_type: pet.animal_type
    })

    // Deliverable # 1 solution code
    const [displayForm, setDisplayForm] = useState(false);

    // Deliverable # 4 solution code
    function updateFormData(event){
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    function toggleDisplayAnimalType(){
        setDisplayAnimalType(!displayAnimalType)
    }

    // Deliverable # 2 solution code
    function toggleDisplayForm(){
        setDisplayForm(!displayForm);
    }

    // Deliverable # 2 & 4 solution code
    function handleSubmit(event){
        event.preventDefault();

        updatePet(formData, pet.id);

        setDisplayForm(!displayForm);
    }

    // Deliverable # 3 solution code
    function handleLikeButtonClick(){
        const updatedPetData = {
            likes: pet.likes + 1
        }

        updatePet(updatedPetData, pet.id)
    }

    function handleAdoptButtonClick(){
        deletePet(pet.id)
    }

    return (
        <li className="pet">
            <img src={pet.image} alt={pet.name}/>
            <h4 onClick={toggleDisplayAnimalType} className={displayAnimalType ? "display-animal-type" : ""}>{displayAnimalType ? pet.animal_type : pet.name}</h4>

            {/* Deliverable # 1 solution code */}
            { !displayForm ?
            <div className="button-div">
                {/* Deliverable # 2 solution code */}
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

        </li>
    );
}

export default Pet;