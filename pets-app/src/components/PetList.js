// Deliverable # 13 solution code
import {pets} from "../data/petsData"

// Deliverable # 14 solution code
const petLIs = pets.map(pet => {
    return (
        // Deliverable # 15 & 16 solution code
        <li key={pet.id} className="pet">
            <img src={pet.image} alt={pet.name}/>
            <h4>{pet.name}</h4>
        </li>
    )
})

// Deliverable # 7 solution code
function PetList(){
    return (
        <ul className="pet-list">
            {/* Deliverable # 14 solution code */}
            {petLIs}
        </ul>
    )
}

// Deliverable # 8 solution code
export default PetList;