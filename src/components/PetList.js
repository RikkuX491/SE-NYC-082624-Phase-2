// Deliverable # 14 solution code
import Pet from "./Pet";

// Deliverable # 5 & 9 solution code
function PetList({pets}){

    // Deliverable # 10 solution code
    const petComponents = pets.map(pet => {
        // Deliverable # 11 & 12 solution code
        return <Pet key={pet.id} pet={pet}/>
    })

    return (
        <ul className="pet-list">
            {/* Deliverable # 10 solution code */}
            {petComponents}
        </ul>
    )
}

// Deliverable # 6 solution code
export default PetList;