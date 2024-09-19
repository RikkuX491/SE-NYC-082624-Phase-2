import PetList from "./PetList";
import Search from "./Search";

import pets from "../data/pets";

import { useState } from "react";

console.log(pets)

function PetPage(){

    const [searchText, setSearchText] = useState("")
    const [petsState, setPetsState] = useState(pets)

    const filteredPets = petsState.filter(pet => {
        return pet.name.toUpperCase().includes(searchText.toUpperCase())
    })

    function updateSearchText(event){
        setSearchText(event.target.value)
    }

    function deletePet(id){
        // console.log(id)
        const filteredPetsArray = petsState.filter(pet => {
            return pet.id !== id
        })
        setPetsState(filteredPetsArray)
    }

    function updatePet(updatedPetData){
        const updatedPetsArray = petsState.map(pet => {
            // console.log(updatedPetData === pet.id)
            // console.log(updatedPetData.id)
            // console.log(pet.id)
            if(updatedPetData.id === pet.id){
                return updatedPetData
            }
            else{
                return pet
            }
        })
        setPetsState(updatedPetsArray)
    }

    return (
        <main>
            <Search updateSearchText={updateSearchText}/>
            <PetList pets={filteredPets} deletePet={deletePet} updatePet={updatePet}/>
        </main>
    );
}

export default PetPage;