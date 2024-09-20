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

    function addPet(newPetData){
        // console.log(petsState)
        // console.log(newPetData)
        // petsState.push(newPetData)
        // setPetsState(petsState)

        setPetsState([...petsState, newPetData])
    }

    return (
        <main>
            <NewPetForm addPet={addPet}/>
            <Search updateSearchText={updateSearchText} searchText={searchText}/>
            <PetList pets={filteredPets} deletePet={deletePet} updatePet={updatePet}/>
        </main>
    );
}

export default PetPage;