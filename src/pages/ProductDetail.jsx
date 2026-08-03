import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import "./ProductDetail.css";

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
    <div className="product-detail-container">
      <div className="product-detail__navigation">
        <button
          className="product-detail__nav-btn"
          onClick={() => navigate(`/product/${productId - 1}`)}
          disabled={productId <= 1}
        >
          ← Prodotto Precedente
        </button>

        <button
          className="product-detail__nav-btn"
          onClick={() => navigate(`/product/${productId + 1}`)}
        >
          Prodotto Successivo →
        </button>
      </div>
      <div className="product-detail__content">
        <div className="product-detail__image-wrapper">
          <img
            className="product-detail__image"
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className="product-detail__info">
          <span className="product-detail__category">{product.category}</span>
          <h1 className="product-detail__title">{product.title}</h1>
          <p className="product-detail__description">{product.description}</p>
          <div className="product-detail__price">{product.price} €</div>
        </div>
      </div>
    </div>
  );
};
