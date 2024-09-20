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
            <button onClick={handleLikeButtonClick} className="like-button">{pet.likes} Likes</button>
            <button onClick={handleAdoptButtonClick} className="adopt-button">Adopt</button>
        </li>
    );
}

export default Pet;