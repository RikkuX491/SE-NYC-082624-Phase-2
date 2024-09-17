// Deliverable # 13 solution code
function Pet({pet}){

    return (
        <li className="pet">
            <img src={pet.image} alt={pet.name}/>
            <h4>{pet.name}</h4>
        </li>
    )
}

// Deliverable # 14 solution code
export default Pet;