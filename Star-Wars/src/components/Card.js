import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/context";

function Card(props) {
  return (
        <div className="card text-center text-bg-secondary m-3 ">
          <img
            src="http://fakeimg.pl/400x200"
            className="card-img-top"
            alt="..."
            style={{ height: "11rem" }}
          />
          <div className="card-body">
            <h4 className="card-title">
              {" "}
              Nombre: {props.cardName}
            </h4>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              {" "}
              <div className="d-grid gap-2 d-md-block">
                <Link
                  className="btn btn-outline-primary"
                  type="button"
                  to= {props.cardLink}
                >
                  ¡Conocer más!
                </Link>
                <button className="btn btn-outline-danger" type="button">
                  Fav
                </button>
              </div>
            </li>
          </ul>
        </div>
  );
}

export default Card;
