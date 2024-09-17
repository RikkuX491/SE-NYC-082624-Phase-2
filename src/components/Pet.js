function Pet({pet}){
    return (
        <li className="pet">
            <img src={pet.image} alt={pet.name}/>
            <h4 className="">{pet.name}</h4>
            <button className="like-button">0 Likes</button>
        </li>
    );
}

export default Pet;