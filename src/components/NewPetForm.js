import { v4 as uuid } from "uuid";

import {useState} from "react";

function NewPetForm({addPet}) {

  // const [newName, setNewName] = useState("");
  // const [newImage, setNewImage] = useState("");
  // const [newAnimalType, setNewAnimalType] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    animal_type: ""
  })

  // console.log(formData)

  function handleSubmit(event){
    event.preventDefault()

    // const newPetData = {
    //   id: uuid(),
    //   name: newName,
    //   image: newImage,
    //   animal_type: newAnimalType,
    //   likes: 0
    // }

    // const newPetData = {
    //   id: uuid(),
    //   name: formData.name,
    //   image: formData.image,
    //   animal_type: formData.animal_type,
    //   likes: 0
    // }

    const newPetData = {
      id: uuid(),
      ...formData,
      likes: 0
    }

    // console.log(newPetData)
    
    addPet(newPetData)

    setFormData({
      name: "",
      image: "",
      animal_type: ""
    })

    // setNewName("")
    // setNewImage("")
    // setNewAnimalType("")

    // event.target.reset()
    
    // console.log(event.target)

    // console.log(event.target.childNodes)
    
    // const inputValue1 = event.target.childNodes[0].value
    // console.log(inputValue1)

    // const inputValue2 = event.target.childNodes[1].value
    // console.log(inputValue2)
  }

  // function handleNameChange(event){
  //   console.log(event.target.name)
  //   setNewName(event.target.value)
  //   console.log(event.target.value)
  //   setFormData({...formData, name: event.target.value})
  //   setFormData({...formData, [event.target.name]: event.target.value})
  // }

  // function handleImageChange(event){
  //   console.log(event.target.name)
  //   // We need to update the newImage state to see the value change when controlling the value of <input>s using state
  //   setNewImage(event.target.value)
  //   setFormData({...formData, [event.target.name]: event.target.value})
  // }

  // function handleAnimalTypeChange(event){
  //   console.log(event.target.name)
  //   setNewAnimalType(event.target.value)
  //   setFormData({...formData, [event.target.name]: event.target.value})
  // }

  function updateFormData(event){
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  return (
    <div className="new-pet-form">
      <h2>New Pet</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={updateFormData} type="text" name="name" placeholder="Pet name" value={formData.name} required/>
        <input onChange={updateFormData} type="text" name="image" placeholder="Image URL" value={formData.image} required/>
        <input onChange={updateFormData} type="text" name="animal_type" placeholder="Animal type" value={formData.animal_type} required/>
        <button type="submit">Add Pet</button>
      </form>
    </div>
  );
}
  
export default NewPetForm;