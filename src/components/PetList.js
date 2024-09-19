import { useState } from "react";

import Pet from "./Pet";

function PetList({ pets, deletePet, updatePet }){
    
    // console.log(deletePet)
    // console.log(updatePet)

    const [displayAnimalType, setDisplayAnimalType] = useState(false)

    function toggleDisplayAnimalType(){
        setDisplayAnimalType(displayAnimalType => !displayAnimalType)
    }

    const petComponents = pets.map(pet => {
        return <Pet key={pet.id} pet={pet} displayAnimalType={displayAnimalType} toggleDisplayAnimalType={toggleDisplayAnimalType} deletePet={deletePet} updatePet={updatePet}/>
    })

    return (
        <ul className="pet-list">{petComponents}</ul>
    );
}

export default PetList;