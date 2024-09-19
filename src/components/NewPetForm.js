import { v4 as uuid } from "uuid";

function NewPetForm() {

    return (
      <div className="new-pet-form">
        <h2>New Pet</h2>
        <form>
          <input type="text" name="name" placeholder="Pet name" />
          <input type="text" name="image" placeholder="Image URL" />
          <input type="text" name="animal_type" placeholder="Animal type"/>
          <button type="submit">Add Pet</button>
        </form>
      </div>
    );
  }
  
  export default NewPetForm;