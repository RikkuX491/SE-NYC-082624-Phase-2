# Lecture # 4 - Information Flow

## Lecture Topics

- Define the term “lifting state”
- Recognize the pattern for changing state in a parent component from a child component
- Explain the role that callback functions play in changing parent state

## Setup

Please make sure that you are inside the folder for this repository which contains the `package.json` file before following these instructions for setup:

1. Run `npm install` in your terminal to install the dependencies from the `package.json` file.

2. Run `npm start` in your terminal to run this React app in the browser. If your browser does not automatically open the page for you, open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Deliverables

We've been asked to build a website for a new pet adoption center, Flatapets, that displays a list of pets available for adoption at this pet adoption center.

Today we will learn about Information Flow to help us accomplish some tasks related to displaying data on the website.

1. In the `PetPage` component in `PetPage.js`, declare a function named `updateSearchText` that will have the same functionality as the anonymous callback function in the `onChange` attribute (change event listener) in the `<input>` element returned from the `PetPage` component. `onChange` should have the value of `updateSearchText`, the named function that you just declared.

2. Create a `Search` component by refactoring the `<div>` element out of the `PetPage` component and into the `Search` component. The `PetPage` component should render the `Search` component in place of the `<div>` element. Typing into the `<input>` inside of the `Search` component to search for pets should maintain the filter functionality. You will need to pass the `updateSearchText` function that you created in Deliverable # 1 as a prop to the `Search` component to order to maintain the functionality.

3. In the `PetPage` component in `PetPage.js`, use `useState` to create a stateful variable named `petsState` and a setter function called `setPetsState`. The initial value for the state should be the `pets` variable.

Note: Make sure to change `pets.filter()` to `petsState.filter()` to maintain the correct functionality of the Search filter feature.

4. In the `PetPage` component in `PetPage.js`, declare a function named `deletePet` that has one parameter named `id`. The `deletePet` function should remove a pet from the page. To do this, you will need to call the `setPetsState` setter function to update the value of the `petsState` to contain an array that excludes the pet that should be deleted.

Hint: You can use the `filter()` array iterator method to create a new array that does not include the pet that you want to delete. Include only the pets whose `id` does **not** match the value of the `id` parameter.

5. Pass the `deletePet` function as a prop to the `PetList` component. Then, in the `PetList` component, pass `deletePet` as a prop to the `Pet` components.

6. In the `Pet` component in `Pet.js`, add an `onClick` attribute (click event listener) to the `<button className="adopt-button">` element returned from the `Pet` component. The value of the `onClick` attribute (click event listener) should be a callback function that invokes the `deletePet` function. Pass in the pet's id as an argument into the `deletePet` function.

7. In the `Pet` component in `Pet.js`, render the value for the pet's likes where it says `/* pet's likes goes here */`

Hint: You can access the value for the pet's likes from the `pet` prop whose value is an `object` that has a key named `likes`.

8. In the `PetPage` component in `PetPage.js`, declare a function named `updatePet` that has one parameter named `updatedPetData`. The `updatePet` function should update an existing pet on the page. To do this, you will need to call the `setPetsState` setter function to update the value of the `petsState` to contain an array that contains the updated data for the pet that should be updated.

Hint: You can use the `map()` array iterator method to create a new array that includes the `updatedPetData` object if the value for the `id` key of `updatedPetData` is equal to the `id` for a pet in one of the iterations of `map()`, but does not change the data for the other pets. Update only the pet whose `id` matches the value of `updatedPetData.id`.

9. Pass the `updatePet` function as a prop to the `PetList` component. Then, in the `PetList` component, pass `updatePet` as a prop to the `Pet` components.

10. In the `Pet` component in `Pet.js`, declare a function named `handleClick`. When the `handleClick` function is called, the following actions should occur:
    - A variable named `updatedPetData` is declared using the `const` keyword, and an `object` is assigned to the `updatedPetData` variable that has a copy of the `pet` prop data as well as a key named `likes` whose value should be `pet.likes + 1`.
    - The `updatePet` function is called and `updatedPetData` is passed as an argument into the `updatePet` function.
    
Hint: You can get a copy of the `pet` prop data by using the spread operator (i.e. `...pet`).

11. In the `Pet` component in `Pet.js`, add an `onClick` attribute (click event listener) to the `<button className="like-button">` element returned from the `Pet` component. The value of the `onClick` attribute (click event listener) should be the `handleClick` function.

### Process: Building React Features With State

1. Decide: Do we need state for this feature? If so, where?
2. Set up the initial state. What's a good initial value? What will we see on the page first? How will it change?
3. Set up component to render something based on state. Do we need conditional rendering?
4. Find a way to update state dynamically (based on user interaction; fetching data; etc).

### Process: Using Inverse Data Flow

1. Define a event handler in the child component
2. Define a callback function in the parent component
3. Pass the callback function as a prop to the child
4. Call the callback in the event handler with whatever data we're sending up

### Inverse Data Flow

In React, we only have one way to share information between multiple components:
`props`. We've seen how to use props to send data from a parent component to a child component, like this:

```js
function Parent() {
  const [search, setSearch] = useState("");

  // passing search down as a prop
  return <Child search={search} />;
}

function Child({ search }) {
  return (
    <div>
      <p>You searched for: {search}</p>
    </div>
  );
}
```

It's also helpful to be able to pass data **up** from a child to a parent. In
React, the only way to achieve this is by sending a **callback function** down
from the parent to the child via `props`, and **call** that callback function in
the child to send up data that we need.

First, we need to define a callback function in the parent component:

```js
function Parent() {
  const [search, setSearch] = useState("");

  function handleSearchChange(newValue) {
    // do whatever we want with the data (usually setting state)
    setSearch(newValue);
  }

  return <Child search={search} />;
}
```

Then, we need to pass a **reference** to the function down as a **prop** to the
child component:

```js
function Parent() {
  const [search, setSearch] = useState("");

  function handleSearchChange(newValue) {
    setSearch(newValue);
  }

  // pass down a reference to the function as a prop
  return <Child search={search} onSearchChange={handleSearchChange} />;
}
```

In our child component, we'll be able to call the callback function with
whatever data we want to send up to the parent:

```js
function Child({ search, onSearchChange }) {
  return (
    <div>
      <p>You searched for: {search}</p>

      {/* call onSearchChange and pass up some data */}
      <input type="text" onChange={(e) => onSearchChange(e.target.value)} />
    </div>
  );
}
```

### Lifting State

- [Sharing State Between Components](https://react.dev/learn/sharing-state-between-components)

- Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor.
- If two sibling components need access to the same `state`, you will want to place the shared `state` in a parent container. Then you can pass down that `state` as well as any functions that need to modify the state as props to the two sibling components that need to display and/or change that data.
