import { v4 as uuid } from "uuid";

// Deliverable # 1 solution code
import {useState} from "react";

// Deliverable # 1 solution code
function NewPetForm({addPet}) {

  // Deliverable # 1 solution code
  const [petName, setPetName] = useState("");
  const [petImage, setPetImage] = useState("");
  const [petAnimalType, setPetAnimalType] = useState("");

  // Deliverable # 1 solution code
  function updatePetName(event){
    setPetName(event.target.value);
  }

  // Deliverable # 1 solution code
  function updatePetImage(event){
    setPetImage(event.target.value);
  }

  // Deliverable # 1 solution code
  function updatePetAnimalType(event){
    setPetAnimalType(event.target.value);
  }

  // Deliverable # 1 solution code
  function handleSubmit(event){
    event.preventDefault();

    const newPet = {
      id: uuid(),
      name: petName,
      image: petImage,
      animal_type: petAnimalType,
      likes: 0
    };

    addPet(newPet);
  }

  return (
    <div className="new-pet-form">
      <h2>New Pet</h2>

      {/* Deliverable # 1 solution code */}
      <form onSubmit={handleSubmit}>
        <input onChange={updatePetName} type="text" name="name" placeholder="Pet name" value={petName} required/>
        <input onChange={updatePetImage} type="text" name="image" placeholder="Image URL" value={petImage} required/>
        <input onChange={updatePetAnimalType} type="text" name="animal_type" placeholder="Animal type" value={petAnimalType} required/>
        <button type="submit">Add Pet</button>
      </form>
      
    </div>
  );
}

export default NewPetForm;