import Pet from "./Pet";
import { useOutletContext } from "react-router-dom";

// We deleted the pets prop from the PetList component before getting the context data
function PetList(){

    // Write the code to retrieve the pets stateful variable using useOutletContext()
    const {pets} = useOutletContext()
    // console.log(pets)

    const petComponents = pets.map(pet => {
        return <Pet key={pet.id} pet={pet}/>
    })

    return (
        <ul className="pet-list">{petComponents}</ul>
    );
}

export default PetList;
