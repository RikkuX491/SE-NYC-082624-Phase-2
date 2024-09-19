# Lecture # 5 - Forms

## Lecture Topics

- Explain the difference between a controlled and uncontrolled input
- Review how to use callback functions with events in React
- Review how to change parent state from a child component

## Setup

Please make sure that you are inside the folder for this repository which contains the `package.json` file before following these instructions for setup:

1. Run `npm install` in your terminal to install the dependencies from the `package.json` file.
2. Run `npm start` in your terminal to run this React app in the browser. If your browser does not automatically open the page for you, open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Deliverables

We've been asked to build a website for a new pet adoption center, Flatapets, that displays a list of pets available for adoption at this pet adoption center.

Today we will learn about how to work with Forms and controlled input in React to help us accomplish some tasks related to displaying data on the website.

1. There is a new component called `NewPetForm` that will allow us to add new pets
to our website. _When the form is submitted_, a new pet should be created
and added to our website.

- Make all the input fields for this form controlled inputs, so that you can
  access all the form data via state. 

- Handle the form's _submit_ event, and use the data that you have saved in
  state to create a new pet object with the following properties:

  ``` jsx
  const newPet = {
    id: uuid(), // the `uuid` library can be used to generate a unique id
    name: petName,
    image: petImage,
    animal_type: petAnimalType
  };
  ```

- Add the new pet to the website by updating state. You should create a prop called `addPet` as a callback which should be passed to the `NewPetForm` component. `addPet` should have 1 parameter which should receive the value of the new pet to be added.

  **NOTE**: to add a new element to an array in state, it's a good idea to use
  the spread operator:

  ```jsx
  function addElement(element) {
    setArray([...array, element]);
  }
  ```

  The spread operator allows us to copy all the old values of an array into a
  new array, and then add new elements as well. When you're working with state,
  it's important to pass a _new_ array to the state setter function instead of
  mutating the original array.

## Using Forms

### Process: Making a Controlled Form

1. For each input element in the form, create a new state variable
2. Connect the `value` attribute of each input field to the corresponding state variable
3. Create an `onChange` handler for each input field to _update_ the corresponding state variable
4. On the `<form>` element, create an `onSubmit` listener and attach a `handleSubmit` handler to run code when the form is submitted

### HTML Forms

In vanilla JS, our typical process for working with forms and getting access to
the form data in our application looked something like this:

- Get the form element and listen for a submit event
- Find the form inputs using their name attribute and grab the values
- Do something with the form data (send a `fetch` request; update the DOM)

``` javascript
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // access form data from the DOM
  const nameInput = event.target.name;
  const passwordInput = event.target.password;

  const formData = {
    name: nameInput.value,
    password: passwordInput.value,
  };
  // do something with the form data
});
```

### React Controlled Forms

In React, rather than looking into the DOM to get the form's input field values
when the form is submitted, we use **state** to monitor the user's input **as
they type**, so that our component state is always _in sync_ with the DOM.

To keep track of each input's value, you need:

1. Some state to manage the input.
2. An `onChange` listener on the input to monitor user input and update state.
3. A `value` attribute on the input.

And for the form itself, you need an `onSubmit` listener on the form to finally
submit data.

For example, if we have a form component that looks like this:

``` javascript
function CommentForm() {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

  return (
    <form>
      <input type="text" name="username" />
      <textarea name="comment" />
      <button type="submit">Submit</button>
    </form>
  );
}
```

We could attach onChange listeners to each input to monitor user input and update state. Doing this creates a 1-way connection wherein user input changes `state`. This
is called an _uncontrolled form_:

``` javascript
function CommentForm() {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  return (
    <form>
      <input type="text" name="username" onChange={handleUsernameChange} />
      <textarea name="comment" onChange={handleCommentChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

To make it a 2-way street wherein `state` can change the user's input, we add a
`value` attribute to our inputs.

``` jsx
<form>
  <input
    type="text"
    name="username"
    onChange={handleUsernameChange}
    value={username}
  />
  <textarea name="comment" onChange={handleCommentChange} value={comment} />
</form>
```

### Inverse Data Flow

When the form actually submits, it's often helpful to pass the state from the form up to a parent component. Imagine we have an app like this:

```txt
    CommentContainer
       /       \
CommentForm CommentCard
```

When the user submits out the comment form, a new `CommentCard` should be rendered. The `CommentContainer` holds an array of comments in state, so it needs to be updated when a new comment is added. To achieve this, we need to pass down a _callback function_ from the `CommentContainer` to the `CommentForm` as a prop:

``` javascript
function CommentContainer() {
  const [comments, setComments] = useState([])

  const commentCards = comments.map((comment, index) => (
    <CommentCard key={index} comment={comment} />
  ))

  // callback for adding a new comment to state
  function addComment(newComment) {
    setComments([...comments, newComment]);
  };

  return (
    <section>
      {commentCards}
      <hr />
      <CommentForm onAddComment={addComment} />
    </section>
  );
}
```

When the user submits the comment, we can use the `handleCommentSubmit` callback in the `onSubmit` event in the `CommentForm`:

```js
function CommentForm({ onAddComment }) {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newComment = {
      username,
      comment,
    };
    onAddComment(newComment);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" onChange={handleUsernameChange} />
      <textarea name="comment" onChange={handleCommentChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

### Advanced State Updates: Arrays

These are some common strategies for updating arrays in state _without_ mutating the original array.

- adding an item: use **spread operator** - `setItems([...items, newItem])`
- removing an item: use **filter** - `setItems(items.filter(i => i.id !== id))`
- updating an item: use **map** - `setItems(items.map(i => i.id === updatedItem.id ? updatedItem : i))`

#### Adding to an array

- Use the spread operator!

``` javascript
function addComment(newComment) {
  // spread to create a new array and add new comment at the end
  const updatedComments = [...comments, newComment];
  setComments(updatedComments);
}
```

#### Removing from an array

- Use filter!

``` javascript
function removeComment(commentId) {
  // filter to return a new array with the comment we don't want removed
  const updatedComments = comments.filter(
    (comment) => comment.id !== commentId
  );
  setComments(updatedComments);
}
```

#### Updating an item in an array

- Use map!

``` javascript
function updateComment(updatedComment) {
  // map to return a new array with the updated comment we want to update
  const updatedComments = comments.map((comment) => {
    if (comment.id === updatedComment.id) {
      // if the comment in state is the one we want to update, replace it with the new updated object
      return updatedComment;
    } else {
      // otherwise return the original object
      return comment;
    }
  });
  setComments(updatedComments);
}
```

If you only want to update one attribute instead of replacing the whole object:

``` javascript
// updating one object in an array
function updateCustomer(id, name) {
  // use map to return a new array so we aren't mutating state
  const updatedCustomers = customers.map((customer) => {
    // in the array, look for the object we want to update
    if (customer.id === id) {
      // if we find the object
      // make a copy of it and update whatever attribute have changed
      return {
        ...customer,
        name: name,
      };
    } else {
      // for all other objects in the array
      return customer; // return the original object
    }
  });

  // set state with our updated array
  setCustomers(updatedCustomers);
}
```