import PetList from "./PetList";
import pets from "../data/pets";
import { useState } from "react";
import Search from './Search';
import NewPetForm from "./NewPetForm";

console.log(pets)

function PetPage(){

    const [petsState, setPetsState] = useState(pets)
    const [searchText, setSearchText] = useState("")

    const filteredPets = petsState.filter(pet => {
        return pet.name.toUpperCase().includes(searchText.toUpperCase())
    })

    function updateSearchText(event){
        setSearchText(event.target.value)
    }

    function deletePet(id){
        setPetsState(petsState.filter(pet => {
            return pet.id !== id
        }))
    }

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

    // Deliverable # 1 solution code
    function addPet(newPet){
        setPetsState([...petsState, newPet]);
    }

    return (
        <main>
            {/* Deliverable # 1 solution code */}
            <NewPetForm addPet={addPet}/>

            <Search updateSearchText={updateSearchText}/>
            <PetList pets={filteredPets} deletePet={deletePet} updatePet={updatePet}/>
        </main>
    );
}

export default PetPage;