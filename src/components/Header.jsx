import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="main-header">
      <div className="header-container">
        <Link to="/" className="brand-logo">
          🍺 <span>BeerBrowse</span>
        </Link>

        { /* Menú de Navegación */ }
        { /* Referencia: https://reactrouter.com/start/declarative/navigating */ }
        <nav className="nav-menu">
          <NavLink 
            to="/" 
            end 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Inicio
          </NavLink>
          <NavLink 
            to="/breweriesbrowser" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Cervecerías
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
