import { Link } from 'react-router-dom';
import BreweriesContainer from '../components/BreweriesContainer';
import "./BreweriesPage.css";

function BreweriesPage() {
  return (
    <div>
      <Link to="/" className="back-to-home-link">
        &larr; Volver al Inicio
      </Link>
      <BreweriesContainer />
    </div>
  );
}

export default BreweriesPage;
