import { NavLink } from "react-router";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Chi siamo
        </NavLink>
        <NavLink
          to="/product"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Prodotti
        </NavLink>
      </nav>
    </header>
  );
};
