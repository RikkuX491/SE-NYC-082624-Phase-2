import { useState } from "react";

// Delete the addPet prop from the NewPetForm component
function NewPetForm({addPet}) {

  // Write the code to retrieve the addPet function using useOutletContext()

  // Write the code to get a function that can be used to navigate to another route using useNavigate() and store it into a variable named navigate

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    animal_type: ""
  });

  function updateFormData(event){
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  function handleSubmit(event){
    event.preventDefault();

    const newPet = {
      ...formData
    };

    addPet(newPet);
    
    setFormData({
      name: "",
      image: "",
      animal_type: ""
    });

    // Write the code to call your navigate() function that you created earlier. Pass in an argument of "/" to your navigate function so that the website will navigate to the "/" route when the form is submitted
  }

  return (
    <div className="new-pet-form">
      <h2>New Pet</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={updateFormData} type="text" name="name" placeholder="Pet name" value={formData.name} required />
        <input onChange={updateFormData} type="text" name="image" placeholder="Image URL" value={formData.image} required />
        <input onChange={updateFormData} type="text" name="animal_type" placeholder="Animal type" value={formData.animal_type} required />
        <button type="submit">Add Pet</button>
      </form>
    </div>
  );
}
  
  export default NewPetForm;