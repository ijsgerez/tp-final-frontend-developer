import { useEffect, useState } from "react";

const URL_BASE = "https://api.openbrewerydb.org/v1/breweries";

function useFetchBreweries() {
  const [breweries, setBreweries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Recibe opcionalmente el país seleccionado
  const fetchBreweries = async (country = "") => {
    setLoading(true);
    setError(null);

    try {
      // Si el usuario eligió un país, construimos la URL con el filtro de la API
      // encodeURIComponent() es una función nativa de JavaScript que transforma una cadena de texto para que pueda usarse de forma segura como parte de una URL (un componente de URI).
      // Reemplaza caracteres especiales (como espacios, símbolos de interrogación ?, barras /, y ampersands &) por códigos de porcentaje (%) seguidos de valores hexadecimales.
      const urlFinal = country
        ? `${URL_BASE}?by_country=${encodeURIComponent(country.toLowerCase())}`
        : URL_BASE;

      const respuesta = await fetch(urlFinal);

      if (!respuesta.ok) {
        throw new Error(`Error: ${respuesta.status} ${respuesta.statusText}`);
      }

      const datosParseados = await respuesta.json();
      setBreweries(datosParseados);
    } catch (error) {
      setError(error.message || "Ocurrió un error en la API");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBreweries();
  }, []);

  return { breweries, loading, error, fetchBreweries };
}

export default useFetchBreweries;
