// Deliverable # 1 solution code
import { NavLink } from "react-router-dom";

// Deliverable # 2 solution code
function NavBar(){
    return (
        <nav className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/add_pet">Add Pet</NavLink>
        </nav>
    );
}

// Deliverable # 3 solution code
export default NavBar;