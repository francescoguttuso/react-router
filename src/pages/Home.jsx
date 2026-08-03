import { NavLink } from "react-router";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <h1>Benvenuto nel nostro e-commerce</h1>
      <NavLink to="/product">Scopri i Prodotti</NavLink>
      <NavLink to="/about">Scopri chi siamo</NavLink>
    </>
  );
};
