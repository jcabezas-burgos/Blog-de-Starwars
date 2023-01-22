import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          ¿Qué te interesa ver?
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a
              className="nav-link"
              aria-current="page"
              href="#scrollspyCharacters"
            >
              Personajes
            </a>
            <a className="nav-link" href="#scrollspyPlanets">
              Planetas
            </a>
            <a className="nav-link" href="#scrollspyVehicles">
              Vehículos
            </a>
          </div>
        </div>
        <div className="dropdown">
          <button
            type="button"
            className="btn btn-danger dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favoritos
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <a className="dropdown-item" href="">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
