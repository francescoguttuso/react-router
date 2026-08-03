import { useState, useEffect } from "react";
import { Link } from "react-router";
import axios from "axios";
import "./Product.css";

export const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) return <h2>Caricamento prodotti...</h2>;

  return (
    <div>
      <h1>I nostri Prodotti</h1>
      <div className="products-grid">
        {products.map((item) => (
          <article key={item.id} className="product-card">
            <img
              className="product-card__image"
              src={item.image}
              alt={item.title}
            />
            <h3 className="product-card__title">{item.title}</h3>
            <p className="product-card__price">{item.price} €</p>
            <Link to={`/product/${item.id}`} className="product-card__button">
              Vedi Dettagli
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};
