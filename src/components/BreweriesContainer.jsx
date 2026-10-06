import useFetchBreweries from "../hooks/useFetchBreweries";
import BreweryForm from "./BreweryForm";
import BreweryList from "./BreweryList";

function BreweriesContainer() {
  const { breweries, loading, error, fetchBreweries } = useFetchBreweries();

  const handleSearch = (pais) => {
    fetchBreweries(pais);
  };

  return (
    <section className="tarjeta breweries">
      <div className="breweries-header">
        <h2>Buscador de Cervecerías</h2>
      </div>

      <BreweryForm onSearch={handleSearch} />

      <BreweryList breweries={breweries} loading={loading} error={error} />
    </section>
  );
}

export default BreweriesContainer;
