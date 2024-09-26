import { useState } from "react";

// Deliverable # 23 solution code
import { Link } from "react-router-dom";

function Pet({pet}){

    const [displayAnimalType, setDisplayAnimalType] = useState(false);

    function toggleDisplayAnimalType(){
        setDisplayAnimalType(displayAnimalType => !displayAnimalType)
    }

    return (
        <li className="pet">
            <img src={pet.image} alt={pet.name}/>
            <h4 onClick={toggleDisplayAnimalType} className={displayAnimalType ? "display-animal-type" : ""}>{displayAnimalType ? pet.animal_type : pet.name}</h4>

            {/* Deliverable # 24 solution code */}
            <Link to={`/pets/${pet.id}`}>{`View ${pet.name}'s profile`}</Link>
        </li>
    );
}

export default Pet;