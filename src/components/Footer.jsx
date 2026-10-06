function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        <p>
          &copy; {new Date().getFullYear()} BeerBrowse. Creado con 💛 por 
          <strong>Javier Gerez</strong> para amantes de la buena birra.
        </p>
        <div className="footer-links">
          <a href="https://github.com/ijsgerez" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="#contacto">Contacto</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
