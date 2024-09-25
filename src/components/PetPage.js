import PetList from "./PetList";
import { useState, useEffect } from "react";
import Search from './Search';
import NewPetForm from "./NewPetForm";

function PetPage(){

    const [pets, setPets] = useState([])
    const [searchText, setSearchText] = useState("")

    useEffect(() => {
        fetch('http://localhost:4000/pets')
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

        // console.log(id)

        // Optimistic rendering for DELETE request
        // setPets(pets.filter(pet => {
        //     return pet.id !== id
        // }))

        // fetch(`http://localhost:4000/pets/${id}`, {
        //     method: "DELETE"
        // })

        // Pessimistic rendering for DELETE request
        fetch(`http://localhost:4000/pets/${id}`, {
            method: "DELETE"
        })
        .then(response => {
            if(response.ok){
                // Update state to remove the pet from the pets state
                setPets(pets.filter(pet => {
                    return pet.id !== id
                }))
            }
            else{
                alert(`Error: Unable to delete Pet # ${id}!`)
            }
        })
    }

    function updatePet(updatedPetData, id){

        // console.log(updatedPetData)
        // console.log(id)

        // Pessimistic rendering for PATCH request
        fetch(`http://localhost:4000/pets/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(updatedPetData)
        })
        .then(response => {
            if(response.ok){
                response.json().then(updatedPet => {
                    setPets(pets.map(pet => {
                        if(pet.id === updatedPet.id){
                            return updatedPet
                        }
                        else{
                            return pet
                        }
                    }))
                })
            }
            else{
                alert(`Error: Unable to update Pet # ${id}!`)
            }
        })
    }

    function addPet(newPet){
        fetch('http://localhost:4000/pets', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({...newPet, likes: 0})
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