import { Link } from 'react-router-dom';

function BreweryList({ breweries, loading, error }) {
  
  if (loading)
    return <p className="cargando">Buscando cervecerías...</p>;
  if (error)
    return <p className="error">Error al cargar cervecerías: {error}</p>;
  if (!breweries || breweries.length === 0) {
    return (
      <p className="sin-resultados">
        No se encontraron cervecerías para esta búsqueda.
      </p>
    );
  }

  return (
    <div className="grid-breweries">
      {breweries.map((brewery) => (
        <article key={brewery.id} className="tarjeta-brewery">
          {/* Encabezado con nombre y tipo */}
          <div className="tarjeta-header">
            {brewery.brewery_type && (
              <span className={`badge badge-${brewery.brewery_type}`}>
                {brewery.brewery_type}
              </span>
            )}
            <h3>{brewery.name}</h3>
          </div>

          {/* Cuerpo con datos de ubicación y teléfono */}
          <div className="tarjeta-body">
            <p className="direccion">
              📍 {brewery.address_1 ? `${brewery.address_1}, ` : ""}
              {brewery.city}, {brewery.state_province || brewery.country}
            </p>

            {brewery.phone && (
              <p className="telefono">
                📞 <a href={`tel:${brewery.phone}`}>{brewery.phone}</a>
              </p>
            )}
          </div>

          {/* Acciones al pie de la tarjeta */}
          <div className="tarjeta-acciones">
            
            <Link to={`/breweriesbrowser/${brewery.id}`} className="btn-detalles">
              🔍 Detalles
            </Link>

            {brewery.website_url && (
              <a
                href={brewery.website_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-web"
              >
                🌐 Web
              </a>
            )}

            {brewery.latitude && brewery.longitude && (
              <a
                href={`https://google.com{brewery.latitude},${brewery.longitude}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-mapa"
              >
                🗺️ Mapa
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}

export default BreweryList;
