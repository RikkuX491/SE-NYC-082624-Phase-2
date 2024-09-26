import Pet from "./Pet";

// Deliverable # 16 solution code
import { useOutletContext } from "react-router-dom";

// Deliverable # 15 solution code
function PetList(){

    // Deliverable # 17 solution code
    const { pets } = useOutletContext();

    const petComponents = pets.map(pet => {
        return <Pet key={pet.id} pet={pet}/>
    })

    return (
        <ul className="pet-list">{petComponents}</ul>
    );
}

export default PetList;