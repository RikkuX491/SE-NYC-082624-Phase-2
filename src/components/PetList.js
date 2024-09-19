import Pet from "./Pet";

function PetList({pets, deletePet, updatePet}){

    const petComponents = pets.map(pet => {

        // Deliverable # 5 & 9 solution code
        return <Pet key={pet.id} pet={pet} deletePet={deletePet} updatePet={updatePet}/>
    })

    return (
        <ul className="pet-list">{petComponents}</ul>
    );
}

export default PetList;