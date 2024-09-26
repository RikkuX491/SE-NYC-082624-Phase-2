import { useState } from "react";

// Deliverable # 19 solution code
import { useOutletContext, useNavigate } from "react-router-dom";

// Deliverable # 18 solution code
function NewPetForm() {

  // Deliverable # 20 solution code
  const { addPet } = useOutletContext();

  // Deliverable # 21 solution code
  const navigate = useNavigate();

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

    // Deliverable # 22 solution code
    navigate("/");
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