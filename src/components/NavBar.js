import { NavLink } from "react-router-dom";

function NavBar(){
    return (
        <nav className="navbar">
          {/* <a className={route === "/" ? "active" : ""} onClick={navigate} href="/">Home</a>
          <a className={route === "/add_pet" ? "active" : ""} onClick={navigate} href="/add_pet">Add Pet</a> */}
          <NavLink to="/">Home</NavLink>
          <NavLink to="/add_pet">Add Pet</NavLink>
        </nav>
    );
}

export default NavBar;