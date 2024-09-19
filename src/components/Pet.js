import { useState } from "react";

function Pet({pet, deletePet, updatePet}){

    const [displayAnimalType, setDisplayAnimalType] = useState(false)

    function toggleDisplayAnimalType(){
        setDisplayAnimalType(displayAnimalType => !displayAnimalType)
    }

    // Deliverable # 10 solution code
    function handleClick(){
        const updatedPetData = {
            ...pet,
            likes: pet.likes + 1
        }

        updatePet(updatedPetData)
    }

    return (
        <li className="pet">
            <img src={pet.image} alt={pet.name}/>
            <h4 onClick={toggleDisplayAnimalType} className={displayAnimalType ? "display-animal-type" : ""}>{displayAnimalType ? pet.animal_type : pet.name}</h4>

            {/* Deliverable # 7 & 11 solution code */}
            <button onClick={handleClick} className="like-button">{pet.likes} Likes</button>

            {/* Deliverable # 6 solution code */}
            <button onClick={() => deletePet(pet.id)} className="adopt-button">Adopt</button>
        </li>
    );
}

export default Pet;