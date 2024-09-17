import Header from './Header';
import PetList from "./PetList";

import ExampleComponent from './ExampleComponent';

function App() {

  const pets = [
    {
        id: 1,
        name: "Fido",
        image: "./images/dog.jpeg"
    },
    {
        id: 2,
        name: "Kitty",
        image: "./images/cat.png"
    },
    {
        id: 3,
        name: "Hammy",
        image: "./images/hamster.jpeg"
    },
    {
        id: 4,
        name: "Polly",
        image: "./images/parrot.jpeg"
    },
    {
        id: 5,
        name: "Angel",
        image: "./images/horse.jpeg"
    },
    {
        id: 6,
        name: "Fluffy",
        image: "./images/guinea-pig.jpeg"
    },
    {
        id: 7,
        name: "Goldie",
        image: "./images/fish.jpeg"
    }
  ]

//   console.log(pets[0].name)

//   const props = {
//     petsData: pets,
//     firstPetName: pets[0].name
//   }

  return (
    <div className="app">
        <Header/>
        <PetList pets={pets} owner={"Alice"}/>

        {/* {ExampleComponent(pets, pets[0].name)} */}
        {/* {ExampleComponent(props)} */}
        {/* {ExampleComponent({petsData: pets, firstPetName: pets[0].name})} */}
        {/* <ExampleComponent petsData={pets} firstPetName={pets[0].name}/> */}
    </div>
  );
}

export default App;