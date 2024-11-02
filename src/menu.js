import React from "react"; 
import { Link } from "react-router-dom"; // Asegúrate de importar Link
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Menu() {
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-toggler"
          aria-controls="navbar-toggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar-toggler">
          <ul className="navbar-nav d-flex justify-content-center align-items-center">
            <li className="nav-item"> {/* Cambié <nav> a <li> */}
              <Link to="/" className="nav-link">Botellas</Link>
            </li>
            <li className="nav-item">
              <Link to="/sobre" className="nav-link">Deseos</Link>
            </li> 
            <li className="nav-item">
              <Link to="/sobre" className="nav-link">Sobre</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export { Menu }; // Asegúrate de exportar correctamente
