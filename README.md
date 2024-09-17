# Lecture # 3 - State & Events

## Lecture Topics

- Explain the importance of state
- Explain the difference between state and props
- Observe how to use the useState hook
- Observe how to use DOM events in React

## Setup

Please make sure that you are inside the folder for this repository which contains the `package.json` file before following these instructions for setup:

1. Run `npm install` in your terminal to install the dependencies from the `package.json` file.

2. Run `npm start` in your terminal to run this React app in the browser. If your browser does not automatically open the page for you, open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Deliverables

We've been asked to build a website for a new pet adoption center, Flatapets, that displays a list of pets available for adoption at this pet adoption center.

Today we will learn about State and Events to help us accomplish some tasks related to displaying data on the website.

Make sure to import `useState` into any Components where you will use `useState`! You can do this by writing the following line of code at the top of the page where the `import` statements are written:

``` javascript
import { useState } from "react";
```

1. In the `Pet` Component in `Pet.js`, use `useState` to create a stateful variable named `count` and a setter function called `setCount`. The initial value for the state should be `0`.

2. Modify the text content for the `<button>` element returned from the `Pet` component so that you are using the value of the `count` stateful variable instead of the `0` that is in the text content for the `button`.

3. Add a click event listener to the `<button>` element returned from the `Pet` component. Clicking the button should invoke a callback function that will call the setter function `setCount`. Use the `setCount` setter function to increase the value of `count` by 1.

4. In the `Pet` Component in `Pet.js`, use `useState` to create a stateful variable named `displayAnimalType` and a setter function called `setDisplayAnimalType`. The initial value for the state should be `false`.

5. Use the ternary operator to set the value for the `className` attribute for the `<h4>` element returned from the `Pet` component to "display-animal-type" if the value of `displayAnimalType` is true, and "" (empty string) if the value of `displayAnimalType` is false. For the text content of the `<h4>` element, conditionally render either the pet's animal_type if `displayAnimalType` is true or the pet's name if `displayAnimalType` is false.

6. Add a click event listener to the `<h4>` element returned from the `Pet` component. Clicking the button should invoke a callback function that will call the setter function `setDisplayAnimalType`. Use the `setDisplayAnimalType` setter function change the value of `displayAnimalType` to `true` if it is false, or change the value to `false` if it is true.

### Events

In React, we add event handlers directly to our JSX. We still must supply the event handler with a callback. For example, if we're trying to implement a click handler on a button, we could do so by passing a callback function to the onClick attribute of an element:

``` javascript
function Counter() {
  return <button onClick={() => console.log("clicked!")}>Click Me</button>;
}
```

Events can only be attached to DOM elements, we can't attach event listeners to our components.

We can also create a helper function for the callback:

``` javascript
function Counter() {
  function handleClick(event) {
    console.log(event);
  }

  return <button onClick={handleClick}>Click Me</button>;
}
```

This is helpful in the case where we need to introduce additional event handling logic. We can do so without cluttering our JSX.

Rather than working with the native event object in the browser, React passes a Synthetic Event object to our event handlers. Synthetic events ensure that you can use the event object in the same way regardless of browser or machine. This comes back to the learn once, write anywhere principle.

Otherwise, events are more or less the same as they are in vanilla JS. With one notable exception being onChange which in React behaves identically to the onInput event.

### State

State is used for data that needs to be dynamic. Where props are passed down from parents to children and are static, values stored in state are meant to change, especially as the user interacts with the DOM.

This is a key component of declarative programming in React: we tie our components to our state by integrating values in state into logic (e.g. conditional rendering). This way, changes in state eventually cause changes to the DOM.

To work with state in a function component, we use the `useState` hook:

```js
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return <button>Count: {count}</button>;
}
```

When we call `useState(0)` inside the function component, that creates a new "state variable" which our function gets access to. That new state variable has an initial value of 0 (or whatever we pass into useState when we call it)

`useState` will return an array of two elements:

- count: the current value for the state variable
- setCount: a setter function to update the state variable

To update a state variable, we use its setter function:

```js
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>Count: {count}</button>;
}
```

Calling the setter function does two things:

- It updates the state variable to some new value
- It causes our component to re-render and update the DOM

### Resources

- [React Docs - Events](https://reactjs.org/docs/events.html)
- [React Docs - Hooks](https://reactjs.org/docs/hooks-overview.html)
- [React Docs - Functional State Updates](https://reactjs.org/docs/hooks-reference.html#functional-updates)
- [React Docs - Stale State Problem](https://reactjs.org/docs/hooks-faq.html#why-am-i-seeing-stale-props-or-state-inside-my-function)