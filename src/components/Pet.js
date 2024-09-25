import { useState } from "react";

function Pet({pet, deletePet, updatePet}){

    // console.log(pet)
    // console.log(pet.id)

    const [displayAnimalType, setDisplayAnimalType] = useState(false)
    const [displayForm, setDisplayForm] = useState(false)

    const [formData, setFormData] = useState({
        name: pet.name,
        image: pet.image,
        animal_type: pet.animal_type
    })

    function toggleDisplayAnimalType(){
        setDisplayAnimalType(!displayAnimalType)
    }

    function toggleDisplayForm(){
        setDisplayForm(!displayForm)
    }

    function handleLikeButtonClick(){
        const updatedPetData = {
            // ...pet,
            likes: pet.likes + 1
        }

        updatePet(updatedPetData, pet.id)
    }

    function handleSubmit(event){
        event.preventDefault()

        const updatedPetData = {
            // ...pet,
            ...formData
        }
        
        updatePet(updatedPetData, pet.id)

        setDisplayForm(!displayForm)
    }

    function handleAdoptButtonClick(){
        deletePet(pet.id)
    }

    function updateFormData(event){
        // console.log("Here's the original form data:")
        // console.log(formData)
        // console.log("Here's a copy of that data:")

        setFormData({...formData, [event.target.name]: event.target.value})

        // console.log(event.target.name)
        // console.log(event.target.value)
    }

    return (
        <li className="pet">
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
        </li>
    );
}

export default Pet;