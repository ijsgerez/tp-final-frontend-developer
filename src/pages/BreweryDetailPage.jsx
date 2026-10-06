import { useParams, Link } from "react-router-dom";
import useFetchBrewery from "../hooks/useFetchBrewery";
import "./BreweryDetailPage.css";

function BreweryDetailPage() {
  const { id } = useParams();
  const { brewery, loading, error } = useFetchBrewery(id);

  if (loading) return <p className="cargando">Buscando los barriles... 🍺</p>;
  if (error) return <p className="error">Ups, hubo un problema: {error}</p>;
  
  if (!brewery) {
    return (
      <div className="detail-not-found-container">
        <h3>No se encontró información de esta cervecería.</h3>
        <Link to="/breweriesbrowser" className="detail-link-volver">Volver</Link>
      </div>
    );
  }

  return (
    <div className="detail-main-wrapper">
      
      <Link to="/breweriesbrowser" className="detail-link-volver">
        &larr; Volver al Buscador
      </Link>

      <article className="tarjeta breweries">
        <span className="badge badge-large">
          {brewery.brewery_type || "General"}
        </span>

        <h1 className="detail-title-main">
          {brewery.name}
        </h1>

        <p className="direccion detail-address-large">
          📍 {brewery.street ? `${brewery.street}, ` : ""}{brewery.city}, {brewery.state_province || brewery.country}
        </p>

        <div className="detail-extra-info-list">
          <p><strong>País:</strong> {brewery.country}</p>
          {brewery.phone && (
            <p>
              <strong>Teléfono:</strong>{" "}
              <a href={`tel:${brewery.phone}`} className="detail-phone-link">
                {brewery.phone}
              </a>
            </p>
          )}
        </div>

        {brewery.website_url && (
          <div className="detail-web-btn-wrapper">
            <a 
              href={brewery.website_url} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-buscar btn-detail-external-web" 
            >
              Visitar Sitio Web 🌐
            </a>
          </div>
        )}
      </article>
    </div>
  );
}

export default BreweryDetailPage;
