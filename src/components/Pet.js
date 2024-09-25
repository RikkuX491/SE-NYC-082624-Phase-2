import { useState } from "react";

function Pet({pet}){

    const [displayAnimalType, setDisplayAnimalType] = useState(false);

    function toggleDisplayAnimalType(){
        setDisplayAnimalType(displayAnimalType => !displayAnimalType)
    }

    return (
        <li className="pet">
            <img src={pet.image} alt={pet.name}/>
            <h4 onClick={toggleDisplayAnimalType} className={displayAnimalType ? "display-animal-type" : ""}>{displayAnimalType ? pet.animal_type : pet.name}</h4>
            {/* Render a Link component here that has a "to" prop that will allow you to visit a "/pets/:id" route, where id is replaced with the pet's id (i.e.: Using pet.id). The text content should have the following format, using string interpolation: "View ${pet.name}'s profile"*/}
        </li>
    );
}

export default Pet;