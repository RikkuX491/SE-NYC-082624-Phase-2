import PetList from "./PetList";
import pets from "../data/pets";

import {useState} from "react";

console.log(pets);

function PetPage(){

    const [searchText, setSearchText] = useState("")
    console.log(searchText)

    function handleChange(event){
        setSearchText(event.target.value)
    }

    const filteredPets = pets.filter(pet => {
        // if(searchText === ""){
        //     return true
        // }
        return pet.name.toUpperCase().includes(searchText.toUpperCase())

        // return pet.name.toUpperCase() === searchText.toUpperCase()

        // return pet.name === searchText

        // else if(pet.name === searchText){
        //     return true
        // }
        // else{
        //     return false
        // }
    })

    console.log(filteredPets)

    return (
        <main>
            <div className="searchbar">
                <label htmlFor="search">Search Pets:</label>
                <input
                    type="text"
                    id="search"
                    placeholder="Type a name to search..."
                    onChange={handleChange}
                />
            </div>
            <PetList pets={filteredPets}/>
        </main>
    );
}

export default PetPage;