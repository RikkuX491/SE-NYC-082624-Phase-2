import {useState} from "react";

function Pet({pet}){

    // let counter2 = 70

    // console.log(useState(0))
    // console.log(useState(0)[0])
    // console.log(useState(0)[1])

    // let numberOfLikes = 0

    // const useStateArray = useState(0)
    // const numberOfLikes = useStateArray[0]
    // const setNumberOfLikes = useStateArray[1]
    // console.log(numberOfLikes)
    // console.log(setNumberOfLikes)

    const [numberOfLikes, setNumberOfLikes] = useState(0)
    // console.log(numberOfLikes)
    
    // console.log(numberOfLikes)
    // console.log(setNumberOfLikes)

    const [displayAnimalType, setDisplayAnimalType] = useState(false)
    // console.log(displayAnimalType)

    // Vanilla JS example of adding an event listener (pseudocode)
    // buttonElement.addEventListener('click', () => {
    //     numberOfLikes++
    //     console.log(numberOfLikes)
    // })

    function increaseNumberOfLikes() {
        setNumberOfLikes(numberOfLikes + 1)
        // counter2++
        // console.log(counter2)
    }

    function toggleDisplayAnimalType(){
        setDisplayAnimalType(displayAnimalType => {
            return !displayAnimalType
        })
        // setDisplayAnimalType(displayAnimalType => {
        //     return !displayAnimalType
        // })
    }

    return (
        <li className="pet">
            <img src={pet.image} alt={pet.name}/>
            <h4 onClick={toggleDisplayAnimalType} className={displayAnimalType ? "display-animal-type" : ""}>{displayAnimalType ? pet.animal_type : pet.name}</h4>
            <button onClick={increaseNumberOfLikes} className="like-button">{numberOfLikes} Likes</button>
        </li>
    );
}

export default Pet;