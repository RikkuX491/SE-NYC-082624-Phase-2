// import { useState } from "react";

function Pet({pet, displayAnimalType, toggleDisplayAnimalType, deletePet, updatePet}){
    
    // console.log(displayAnimalType)
    // console.log(toggleDisplayAnimalType)
    // console.log(deletePet)
    // console.log(updatePet)

    // const [displayAnimalType, setDisplayAnimalType] = useState(false)

    // function toggleDisplayAnimalType(){
    //     setDisplayAnimalType(displayAnimalType => !displayAnimalType)
    // }

    // console.log(pet)
    // console.log(pet.likes)

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
            <button onClick={handleClick} className="like-button">{pet.likes} Likes</button>
            <button onClick={() => deletePet(pet.id)} className="adopt-button">Adopt</button>
        </li>
    );
}

export default Pet;