# Lecture # 6 - Side Effects & Data Fetching

## Lecture Topics

- Explain what a side effect is
- Observe how React manages side effects with the useEffect hook
- Observe how to use the useEffect hook to fetch data on page load
- Observe how to send a POST request via form
- Review changing parent state

## Setup

Please make sure that you are inside the folder for this repository which contains the `package.json` file before following these instructions for setup:

1. Run `npm install` in your terminal to install the dependencies from the `package.json` file.
2. Run `npm run server`. This will run your backend on port `4000`.
3. In a new terminal, run `npm start` in your terminal to run this React app in the browser. If your browser does not automatically open the page for you, open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Deliverables

We've been asked to build a website for a new pet adoption center, Flatapets, that displays a list of pets available for adoption at this pet adoption center.

Today we will learn about Side Effects & Data Fetching in React to help us accomplish some tasks related to displaying data on the website.

1. Use the `useEffect` hook in the `PetPage` component in `PetPage.js`. Inside the callback for
  `useEffect`, use the `fetch()` function to make a `GET` request to
  `http://localhost:4000/pets` and retrieve the pets data from the server. Call the `setPets` setter function to update the state to contain the pets data retrieved from the server. Make sure to include an empty dependency array so that the code inside of the callback function in `useEffect` (the side effect) will only run once! The pets should now display on the webpage in the browser.
2. When submitting the `<form>` to add a new pet, a new id is generated for the new pet using the `uuid()` function in the `NewPetForm` component in `NewPetForm.js`. Delete line 20 in `NewPetForm.js` (this is the line with the following code `id: uuid(),`) so that we are no longer using the `uuid()` function to generate a new id for the new pet.
3. Modify the code in the `addPet` function in the `PetPage` component to use the `fetch()` function to make a `POST` request to `http://localhost:4000/pets` to add the new pet to the database (db.json) when the form is submitted. Implement a pessimistic rendering approach that will call the `setPets` setter function to update the state with the pets data to add the new pet to the state after getting the data for the new pet from the server when the `POST` request is successful. The new pet should display on the webpage in the browser, as well as all of the other pets, and should persist when refreshing the page.
- Note: If you take a look in the `db.json` file and see where the new pet was added (if the `POST` request was successful), you will notice that the JSON Server took care of generating a new id for the new pet! We no longer need to worry about generating a new id manually since the JSON Server will take care of generating a new id for the new object added via `POST` request.

## Fetching Data with useEffect

In terms of a React component, the main effect of the component is to return some JSX. One of the first rules we learned about function components is that they take in props, and return JSX. However, it's often necessary for a component to perform some side effects in addition to its main job of returning JSX. For example, we might want to:

- Fetch some data from an API when a component loads
- Start or stop a timer
- Manually change the DOM
- Get the user's location

In order to handle these kinds of side effects within our components, we'll need to use another special hook from React: `useEffect`.

It looks like this:

``` javascript
import { useEffect } from "react";

function App() {
  useEffect(
    // side effect function
    () => {
      console.log("Running side effect");
    },
    // dependencies array
    []
  );

  console.log("Rendering component");

  return <h1>App</h1>;
}
```

If you run the example code now, you'll see the console messages appear in this order:

- Rendering component
- Running side effect

So we are now able to run some extra code as a side effect after our component is rendered!

## useEffect Dependencies

``` javascript
useEffect(
  // side effect function
  () => {
    console.log("Running side effect");
  },
  // dependencies array
  []
);
```

The dependencies array lets us control what state the side effect code depends on. You can think of it as a way to synchronize our effects with state.

- When we don't include a dependencies array, our side effect will run every time the component renders.
- When the dependencies array is empty, the side effect will only run once.
- When we put stateful variables into the dependencies array, the side effect will run any time the state for those stateful variables change between renders.

For example, if we change our component like so:

``` javascript
import { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Running side effect");
    console.log("Count is: ", count);
  }, [count]);

  console.log("Rendering component");

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => setCount((count) => count + 1)}>{count}</button>
    </div>
  );
}
```

The side effect code will only run when the `count` state changes; but it won't run when the `text` state changes.

## Resource

Learning `useEffect` is challenging, but in the long run it will be one of the
most important tools in your React toolkit. Here is a deeper dive into
working with `useEffect` to refer to:

- The [useEffect reference](https://react.dev/reference/react/useEffect)
  on the React docs is a great place to start!