import App from './components/App';
import ErrorPage from './components/ErrorPage';
import PetList from './components/PetList';
import NewPetForm from './components/NewPetForm';
import PetProfile from './components/PetProfile';

const routes = [
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <PetList/>
            },
            {
                path: "/add_pet",
                element: <NewPetForm/>
            },
            {
                path: "/pets/:id",
                element: <PetProfile/>
            }
        ]
    }
];

export default routes;