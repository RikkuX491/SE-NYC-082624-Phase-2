# Lecture # 7 - PATCH & DELETE

## Lecture Topics

- Send a PATCH & DELETE request
- Review changing parent state

## Setup

Please make sure that you are inside the folder for this repository which contains the `package.json` file before following these instructions for setup:

1. Run `npm install` in your terminal to install the dependencies from the `package.json` file.

2. Run `npm run server`. This will run your backend on port `4000`.

3. In a new terminal, run `npm start` in your terminal to run this React app in the browser. If your browser does not automatically open the page for you, open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Deliverables

We've been asked to build a website for a new pet adoption center, Flatapets, that displays a list of pets available for adoption at this pet adoption center.

Today we will make a `PATCH` request in our React app to update our pet data in the JSON Server database and make a `DELETE` request to delete pets from the JSON Server database, so that we can persist updates and deletions in our React app / website.

1. In the `Pet` component in `Pet.js`, create a state that includes a stateful variable named `displayForm` and a setter function called `setDisplayForm`. The initial value for the state should be `false`. The `Pet` component should conditionally render either the `<div className="button-div">` element if `displayForm` is `false` or the `<form className="edit-pet">` element is `displayForm` is `true`.

2. Click on the `<button className="update-button">` element in the `Pet` component in `Pet.js` and see the `<form className="edit-pet">` element in place of the `<div className="button-div">` element. If I `submit` the `<form>` by clicking on the `Save Changes` `<button>` inside of the "edit-pet" `<form>`, the `<form className="edit-pet">` element should be replaced with the `<div className="button-div">` element.

3. Clicking on the `<button className="like-button">` element rendered by the `Pet` component in `Pet.js` should make a `PATCH` request to persist updates for the increase in number of `likes` for the pet, in addition to updating the DOM. Implement a pessimistic rendering approach to update the number of `likes` for the pet by calling the `setPets` setter function to update the pets state appropriately.

4. Submitting the form (`<form className="edit-pet">`) rendered by the `Pet` component in `Pet.js` should make a `PATCH` request to persist updates to the `name`, `image`, and `animal_type` for the pet, in addition to updating the DOM. Implement a pessimistic rendering approach to update the information for the pet by calling the `setPets` setter function to update the pets state appropriately.

5. Clicking on the `<button className="adopt-button">` element rendered by the `Pet` component in `Pet.js` should make a `DELETE` request to persist pet deletions, in addition to updating the DOM.