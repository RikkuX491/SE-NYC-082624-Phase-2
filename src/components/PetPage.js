import PetList from "./PetList";
import { useState, useEffect } from "react";
import Search from './Search';
import NewPetForm from "./NewPetForm";

function PetPage(){

    const [pets, setPets] = useState([])
    const [searchText, setSearchText] = useState("")

    // console.log("Before the useEffect code...")

    useEffect(() => {
        fetch("http://localhost:4000/pets")
        .then(response => response.json())
        .then(petsData => setPets(petsData))
    }, [])

    // useEffect(retrievePetsData, [])

    // function retrievePetsData(){
    //     fetch("http://localhost:4000/pets")
    //     .then(response => response.json())
    //     .then(petsData => setPets(petsData))
    // }

    // useEffect(() => {
    //     console.log("Side effect has occurred!")
    // }, [])

    // useEffect with a stateful variable in the dependency array - the side effect is dependent on the state of pets and will be called whenever the pets state is updated
    // useEffect(() => {
    //     console.log("Side effect has occurred!")
    // }, [pets])

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

    function addPet(newPet){
        // console.log(newPet.id)

        // Optimistic rendering with POST request
        // setPets([...pets, newPet])

        // fetch("http://localhost:4000/pets", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(newPet)
        // })

        // Pessimistic rendering with POST request
        fetch("http://localhost:4000/pets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newPet)
        })
        .then(response => {
            // console.log(response)
            // console.log(response.ok)

            if(response.ok){
                response.json().then(newPetData => {
                    // console.log(newPetData.id)
                    // console.log(newPetData)
                    setPets([...pets, newPetData])
                })
            }
            else{
                alert("Error: Unable to add new pet!")
            }
        })
    }

    // console.log("After the useEffect code...")

    return (
        <main>
            {/* <button onClick={retrievePetsData}>Retrieve Pets Data</button> */}
            <NewPetForm addPet={addPet}/>
            <Search updateSearchText={updateSearchText} searchText={searchText}/>
            <PetList pets={filteredPets} deletePet={deletePet} updatePet={updatePet}/>
        </main>
    );
}

export default PetPage;