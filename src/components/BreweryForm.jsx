import { useState } from "react";

function BreweryForm({ onSearch }) {
  const [paisSeleccionado, setPaisSeleccionado] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Se pasa el país seleccionado al componente padre
    onSearch(paisSeleccionado);
  };

  return (
    <form onSubmit={handleSubmit} className="formulario-filtro">
      <div className="control-grupo">
        <label htmlFor="select-pais">Filtrar por País:</label>
        <select
          id="select-pais"
          value={paisSeleccionado}
          onChange={(e) => setPaisSeleccionado(e.target.value)}
        >
          <option value="">-- Todos los países --</option>
          <option value="United States">Estados Unidos</option>
          <option value="Ireland">Irlanda</option>
          <option value="Scotland">Escocia</option>
          <option value="England">Inglaterra</option>
          {/* <option value="Argentine">Argentina</option> OPCION QUE GENERA UNA BUSQUEDA CON CERO RESULTADOS */}
        </select>
      </div>
      
      <button type="submit" className="btn-buscar">
        Buscar
      </button>
    </form>
  );
}

export default BreweryForm;
