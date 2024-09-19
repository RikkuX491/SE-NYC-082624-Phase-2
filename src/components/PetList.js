import Pet from "./Pet";

function PetList({pets, deletePet, updatePet}){

    const petComponents = pets.map(pet => {
        return <Pet key={pet.id} pet={pet} deletePet={deletePet} updatePet={updatePet}/>
    })

    return (
        <ul className="pet-list">{petComponents}</ul>
    );
}

export default PetList;