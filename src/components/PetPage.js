import PetList from "./PetList";

// Deliverable # 2 solution code
import Search from "./Search";

import pets from "../data/pets";

import { useState } from "react";

console.log(pets)

function PetPage(){

    const [searchText, setSearchText] = useState("")

    // Deliverable # 3 solution code
    const [petsState, setPetsState] = useState(pets)

    // Deliverable # 3 solution code
    const filteredPets = petsState.filter(pet => {
        return pet.name.toUpperCase().includes(searchText.toUpperCase())
    })

    // Deliverable # 1 solution code
    function updateSearchText(event){
        setSearchText(event.target.value)
    }

    // Deliverable # 4 solution code
    function deletePet(id){
        setPetsState(petsState.filter(pet => {
            return pet.id !== id
        }))
    }

    // Deliverable # 8 solution code
    function updatePet(updatedPetData){
        setPetsState(petsState.map(pet => {
            if(pet.id === updatedPetData.id){
                return updatedPetData
            }
            else{
                return pet
            }
        }))
    }

    return (
        <main>
            {/* Deliverable # 2 solution code */}
            <Search updateSearchText={updateSearchText}/>

            {/* Deliverable # 5 & 9 solution code */}
            <PetList pets={filteredPets} deletePet={deletePet} updatePet={updatePet}/>
        </main>
    );
}

export default PetPage;