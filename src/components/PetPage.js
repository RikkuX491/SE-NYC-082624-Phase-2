import PetList from "./PetList";
import pets from "../data/pets";

console.log(pets)

function PetPage(){
    return (
        <main>
            <div className="searchbar">
                <label htmlFor="search">Search Pets:</label>
                <input
                    type="text"
                    id="search"
                    placeholder="Type a name to search..."
                />
            </div>
            <PetList pets={pets}/>
        </main>
    );
}

export default PetPage;