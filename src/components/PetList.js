import Pet from "./Pet";

// We can also destructure an object within the parameter for a function, as can be seen in the example on line 4
function PetList({pets, owner}){

    // console.log(props)
    // console.log(props.pets)
    // console.log(props.owner)

    // const pets = props.pets
    // const owner = props.owner

    // One way to destructure an object
    // const {pets, owner} = props

    // console.log(pets)
    // console.log(owner)

    // const petLIElements = pets.map(pet => {
    //     return (
    //         <li key={pet.id} className="pet">
    //             <img src={pet.image} alt={pet.name}/>
    //             <h4>{pet.name}</h4>
    //         </li>
    //     )
    // })
    // console.log(petLIElements)

    const petComponents = pets.map(pet => {
        return <Pet key={pet.id} pet={pet}/>
    })

    return (
        <ul className="pet-list">
            {/* {petLIElements} */}
            {petComponents}
        </ul>
    )
}

export default PetList;