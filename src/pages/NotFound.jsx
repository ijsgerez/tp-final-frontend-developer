import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="notfound-container">
      
      <article className="tarjeta breweries">
        
        <h1 className="notfound-code">404</h1>
        
        <h2 className="notfound-title">
          ¡Barril vacío! Página no encontrada
        </h2>
        
        <p className="direccion notfound-text">
          Lo sentimos, la ruta a la que estás intentando acceder no existe o fue movida.
        </p>
        
        <Link to="/" className="btn-buscar btn-notfound-home">
          Volver al Inicio 🏠
        </Link>

      </article>
    </div>
  );
}

export default NotFound;

