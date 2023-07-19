
import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <div>
      <ul className="main-navbar">
        <li className="nav-bar">
          <NavLink className={(nav) => (nav.isActive ? "nav nav-active" : "nav")} to="/">
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(nav) => (nav.isActive ? "nav nav-active" : "nav")}
            to="/apropos">
            A Propos
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
