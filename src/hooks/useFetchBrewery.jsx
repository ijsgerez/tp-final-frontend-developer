import { useEffect, useState } from "react";

const URL_BASE = "https://api.openbrewerydb.org/v1/breweries";

function useFetchBrewery(id) {
  const [brewery, setBrewery] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBrewery = async () => {
    // Si no hay id por alguna razón, cortamos la ejecución
    if (!id) return;

    setLoading(true);
    setError(null);

    try {
      const urlFinal = `${URL_BASE}/${id}`;

      const respuesta = await fetch(urlFinal);

      if (!respuesta.ok) {
        throw new Error(`Error: ${respuesta.status} ${respuesta.statusText}`);
      }

      const datosParseados = await respuesta.json();
      setBrewery(datosParseados);
    } catch (error) {
      setError(error.message || "Ocurrió un error en la API");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBrewery();
  }, [id]); // Si el id cambia por algún motivo, vuelve a pedir los datos

  return { brewery, loading, error, fetchBrewery };
}

export default useFetchBrewery;
