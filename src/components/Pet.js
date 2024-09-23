import { useState } from "react";

function Pet({pet, deletePet, updatePet}){

    const [displayAnimalType, setDisplayAnimalType] = useState(false)

    function toggleDisplayAnimalType(){
        setDisplayAnimalType(!displayAnimalType)
    }

    function handleLikeButtonClick(){
        const updatedPetData = {
            ...pet,
            likes: pet.likes + 1
        }

        updatePet(updatedPetData)
    }

    function handleAdoptButtonClick(){
        deletePet(pet.id)
    }

    return (
        <li className="pet">
            <img src={pet.image} alt={pet.name}/>
            <h4 onClick={toggleDisplayAnimalType} className={displayAnimalType ? "display-animal-type" : ""}>{displayAnimalType ? pet.animal_type : pet.name}</h4>
            { true ?
            <div className="button-div">
                <button className="update-button">Update Pet</button>
                <button onClick={handleLikeButtonClick} className="like-button">{pet.likes} Likes</button>
                <br/>
                <button onClick={handleAdoptButtonClick} className="adopt-button">Adopt</button>
            </div> :
            <form className="edit-pet">
                <input type="text" name="name" placeholder="Pet name" />
                <input type="text" name="image" placeholder="Image URL" />
                <input type="text" name="animal_type" placeholder="Animal type" />
                <button type="submit">Save Changes</button>
            </form>
            }
        </li>
    );
}

export default Pet;