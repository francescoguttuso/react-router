import { useState, useEffect } from "react";
import axios from "axios";

export const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Errore nella richiesta:", err);
        setError("Impossibile caricare i prodotti. Riprova più tardi.");
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Caricamento prodotti con Axios...</h2>;
  if (error) return <h2 style={{ color: "red" }}>{error}</h2>;

  return (
    <div>
      <h1>I nostri Prodotti </h1>
      <div className="products-grid">
        {products.map((item) => (
          <article key={item.id} className="product-card">
            <img src={item.image} alt={item.title} width="100" />
            <h3>{item.title}</h3>
            <p>{item.price} €</p>
          </article>
        ))}
      </div>
    </div>
  );
};
