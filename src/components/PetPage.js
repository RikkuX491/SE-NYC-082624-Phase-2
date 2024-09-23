import PetList from "./PetList";

// Deliverable # 1 solution code
import { useState, useEffect } from "react";

import Search from './Search';
import NewPetForm from "./NewPetForm";

function PetPage(){

    const [pets, setPets] = useState([])
    const [searchText, setSearchText] = useState("")

    // Deliverable # 1 solution code
    useEffect(() => {
        fetch("http://localhost:4000/pets")
        .then(response => response.json())
        .then(petsData => setPets(petsData))
    }, [])

    const filteredPets = pets.filter(pet => {
        return pet.name.toUpperCase().includes(searchText.toUpperCase())
    })

    function updateSearchText(event){
        setSearchText(event.target.value)
    }

    function deletePet(id){
        setPets(pets.filter(pet => {
            return pet.id !== id
        }))
    }

    function updatePet(updatedPetData){
        setPets(pets.map(pet => {
            if(pet.id === updatedPetData.id){
                return updatedPetData
            }
            else{
                return pet
            }
        }))
    }

    // Deliverable # 3 solution code
    function addPet(newPet){
        fetch("http://localhost:4000/pets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newPet)
        })
        .then(response => response.json())
        .then(newPetData => setPets([...pets, newPetData]))
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