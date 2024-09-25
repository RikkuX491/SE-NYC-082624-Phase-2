# Lecture # 8 - Client-Side Routing

## Lecture Topics

- Refactor code to include client-side routing using React Router V6
- Handle nested client-side routes

## Setup

Please make sure that you are inside the folder for this repository which contains the `package.json` file before following these instructions for setup:

1. Run `npm install` in your terminal to install the dependencies from the `package.json` file.

2. Run `npm install react-router-dom@6` to install react-router-dom so you can start using React Router version 6 (the curriculum covers React Router version 6, so make sure to include @6 at the end of the install command to install React Router version 6).

3. Run `npm run server`. This will run your backend on port `4000`.

4. In a new terminal, run `npm start` in your terminal to run this React app in the browser. If your browser does not automatically open the page for you, open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Deliverables

We've been asked to build a website for a new pet adoption center, Flatapets, that displays a list of pets available for adoption at this pet adoption center.

Today we will be using React Router to organize our single-page app into separate routes that will allow us to display different pages in this single-page app.

1. Create a new file in the `components` folder (`src/components`) named `NavBar.js`, and write the following code in `NavBar.js` to import `NavLink` into `NavBar.js`:

```javascript
import { NavLink } from "react-router-dom";
```

2. In the `NavBar.js` file, create a component named `NavBar` that returns a `<nav>` element with the `className` of `"navbar"` that renders the following components nested within it in this exact order:
   - A `<NavLink>` component (both opening and closing tags) that has a `to` prop with the value of `"/"` and text content of `Home`.
   - A `<NavLink>` component (both opening and closing tags) that has a `to` prop with the value of `"/add_pet"` and text content of `Add Pet`.

3. Export the `NavBar` component from the `NavBar.js` file.

4. Create a new file in the `components` folder (`src/components`) named `ErrorPage.js`, and write the following code in `ErrorPage.js` to import the `NavBar` and `Header` components into `ErrorPage.js`:

```javascript
import NavBar from "./NavBar";
import Header from "./Header";
```

5. In the `ErrorPage.js` file, create a component named `ErrorPage` that returns a `<div>` element with the `className` of `"app"` that renders the following components / elements nested within it in this exact order:
   - The `<NavBar />` component.
   - The `<Header />` component.
   - An `<h1>` element that has the text content of `Oops! Looks like something went wrong.`.

6. Export the `ErrorPage` component from the `ErrorPage.js` file.

7. In the `index.js` file, write the following code to import `createBrowserRouter` and `RouterProvider` into `index.js`:

```javascript
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
```

8. In the `src` folder, create a file named `routes.js` and write the following code in `routes.js` to import the `App`, `ErrorPage`, `PetList`, `NewPetForm`, and `PetProfile` components into `routes.js`:

```javascript
import App from "./components/App";
import ErrorPage from "./components/ErrorPage";
import PetList from "./components/PetList";
import NewPetForm from "./components/NewPetForm";
import PetProfile from "./components/PetProfile";
```

9. In the `routes.js` file, declare a variable named `routes` using the `const` keyword whose value is an array `[]` with a single element that is an `object` that has the following key and value pairs:
   - A key named `path` with the value of `"/"`
     - A key named `element` with the value of `<App />`,
     - A key named `errorElement` with the value of `<ErrorPage />`
     - A key named `children` with the value of an array `[]` with the following elements:
       - An object with the following key and value pairs:
         - A key named `path` with the value of `"/"`
         - A key named `element` with the value of `<PetList />`
       - An object with the following key and value pairs:
         - A key named `path` with the value of `"/add_pet"`
         - A key named `element` with the value of `<NewPetForm />`
       - An object with the following key and value pairs:
         - A key named `path` with the value of `"/pets/:id"`
         - A key named `element` with the value of `<PetProfile />`

10. Export the `routes` variable from the `routes.js` file. Import the `routes` variable into the `index.js` file.

11. In the `index.js` file, write the following line of code to declare a variable named `router` using the `const` keyword, and assign it the value of the return value of the `createBrowserRouter()` function, where `routes` is passed in as an argument to the `createBrowserRouter()` function:

```javascript
const router = createBrowserRouter(routes)
```

12. Render the `<RouterProvider/>` component within `root.render()` as follows, where `router` is the value for the `router` prop for the `<RouterProvider/>` component:

```javascript
root.render(<RouterProvider router={router} />);
```

13. In the `App.js` file, write the following code to import the `NavBar` component as well as `Outlet` into `App.js`:

```javascript
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
```

14. Modify the `App` component so that the following components are rendered within the `<div className="app">` element in this exact order:
    - The `<NavBar />` component.
    - The `<Header />` component.
    - The `<Outlet />` component. The `<Outlet />` component should have a prop named `context` that has the value of an `object` with the following key and value pairs:
      - A key named `pets` with the value of the `pets` stateful variable.
      - A key named `addPet` with the value of the `addPet` function.
      - A key named `updatePet` with the value of the `updatePet` function.
      - A key named `deletePet` with the value of the `deletePet` function.

15. In the `PetList.js` file, delete the `pets` prop from the `PetList` component.

16. Write the following code to import `useOutletContext` into `PetList.js`:

```javascript
import { useOutletContext } from "react-router-dom";
```

17. Call the `useOutletContext()` function in the `PetList` component to retrieve the context data sent from `App.js`. You will only need access to the `pets` stateful variable, so destructure the `object` retrieved from `useOutletContext()` to create a variable named `pets` that has the value of the `pets` stateful variable sent from `App.js`.

18. In the `NewPetForm.js` file, delete the `addPet` prop from the `NewPetForm` component.

19. Write the following code to import `useOutletContext` and `useNavigate` into `NewPetForm.js`:

```javascript
import { useOutletContext, useNavigate } from "react-router-dom";
```

20. Call the `useOutletContext()` function in the `NewPetForm` component to retrieve the context data sent from `App.js`. You will only need access to the `addPet` function, so destructure the `object` retrieved from `useOutletContext()` to create a variable named `addPet` that has the value of the `addPet` function sent from `App.js`.

21. Write the following code in the `NewPetForm` component to create a variable that will hold a reference to a function that can be used to navigate to a different route:

```javascript
const navigate = useNavigate();
```

22. Call your `navigate()` function in the `handleSubmit()` function, in the `NewPetForm` component, after all other code in `handleSubmit()` has finished executing. Pass in an argument of `'/'` to the `navigate()` so that the website will navigate to the `/` route after the form is submitted.

23. In the `Pet.js` file, write the following code to import `Link` into `Pet.js`:

```javascript
import { Link } from "react-router-dom";
```

24. Render a `<Link>` component (both opening and closing tags) below the `<h4>` element within the `<li>` element. The `<Link>` component should have a `to` prop that has the value of `/pets/${pet.id}`. The text content for the `<Link>` component should have the value of `View ${pet.name}'s profile`.

25. In the `PetProfile.js` file, write the following code to import `useParams` and `useOutletContext` into `PetProfile.js`:

```javascript
import { useParams, useOutletContext } from "react-router-dom";
```

26. Write code in the `PetProfile` component that will allow you to retrieve the `id` parameter using `useParams()`.

27. Write code in the `PetProfile` component that will allow you to retrieve the `updatePet` and `deletePet` functions using `useOutletContext()`.

28. Write code in the `useEffect()`'s callback function in the `PetProfile` component that will allow you to retrieve the data for the pet with the id of the value of the `id` parameter retrieved from `useParams()`.
