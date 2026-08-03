import { Link } from "react-router";
import "./NotFound.css";

export const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found__code">404</h1>
      <h2 className="not-found__title">Ops! Pagina non trovata</h2>
      <p className="not-found__text">
        La pagina che stai cercando non esiste o è stata spostata.
      </p>
      <Link to="/" className="not-found__link">
        Torna alla Home
      </Link>
    </div>
  );
};