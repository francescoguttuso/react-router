import { Link } from "react-router";

export const Home = () => {
  return (
    <>
      <h1>Benuvenuto nel nostro e-commerce</h1>
      <Link to="/product">Scopri i Prodotti</Link>
      <Link to="/about">Scopri chi siamo</Link>
    </>
  );
};
