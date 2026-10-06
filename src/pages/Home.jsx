import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="tarjeta breweries home-container">
      <h1>🍻 Bienvenido al Buscador de Cervecerías</h1>
      
      <p className="home-text">
        Descubre establecimientos, microcervecerías y brewpubs de diferentes
        partes del mundo. Proyecto desarrollado para el Trabajo Práctico Final
        de la UTN.
      </p>
      
      <Link to="/breweriesbrowser" className="btn-buscar btn-home-ingresar">
        Ingresar al Buscador
      </Link>
    </div>
  );
}

export default Home;
