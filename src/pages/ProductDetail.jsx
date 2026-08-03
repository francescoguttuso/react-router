import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";

export const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const productId = Number(id);

  useEffect(() => {
    setLoading(true);

    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.data || res.data === "") {
          navigate("/product");
          return;
        }
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        navigate("/product");
      });
  }, [id, navigate]);

  if (loading) return <h2>Caricamento dettaglio prodotto...</h2>;

  return (
    <div className="product-detail">
      <div className="navigation-buttons">
        <button
          onClick={() => navigate(`/product/${productId - 1}`)}
          disabled={productId <= 1}
        >
          ← Prodotto Precedente
        </button>

        <button onClick={() => navigate(`/product/${productId + 1}`)}>
          Prodotto Successivo →
        </button>
      </div>

      <article>
        <h1>{product.title}</h1>
        <img src={product.image} alt={product.title} width="200" />
        <p>
          <strong>Categoria:</strong> {product.category}
        </p>
        <p>{product.description}</p>
        <h3>{product.price} €</h3>
      </article>
    </div>
  );
};
