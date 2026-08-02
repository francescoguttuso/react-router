import { NavLink } from "react-router";

export const Home = () => {
  return (
    <>
      <h1>Benuvenuto nel nostro e-commerce</h1>
      <NavLink to="/product">Scopri i Prodotti</NavLink>
      <NavLink to="/about">Scopri chi siamo</NavLink>
    </>
  );
};
