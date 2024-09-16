import {pets} from "../data/petsData"

function PetList(){

    // console.log(pets)
    console.log(pets[0])

    return (
        <ul className="pet-list">
            <li className="pet">
                <img src={pets[0].image} alt={pets[0].name}/>
                <h4>{pets[0].name}</h4>
            </li>
            <li className="pet">
                <img src={pets[1].image} alt={pets[1].name}/>
                <h4>{pets[1].name}</h4>
            </li>
        </ul>
    )
}

export default PetList