import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/context";


function Navbar() {
  const { store, actions } = useContext(Context);
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
            {store.favorites.map((item, index) => {
              return (
                <li className="dropdown-item" key={index}>
                  {item.name}
                  <button className="ml-2 h5"
                    onClick={() => actions.deleteFavorites(index)}
                  >x</button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
