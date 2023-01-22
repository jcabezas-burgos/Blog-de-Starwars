import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/context";
import Card from "./Card";

function Info() {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getPeople();
    actions.getPlanets();
    actions.getVehicles();
  }, []);
  return (
    <div>
      <div className="pt-5" id="scrollspyCharacters">
        <h2>Personajes</h2>
        <div className="col-12 col-md-6 col-xl-3 d-flex justify-content-evenly list-group">
            {store.people?.map((item) => {
              return (
                <Card
                  key={item.uid}
                  cardName={item.name}
                  cardLink= {"/character/"+ item.uid}
                />
              );
            })}
        </div>
      </div>
      <div className="pt-5" id="scrollspyPlanets">
        <h2>Planetas</h2>
        <div className="col-12 col-md-6 col-xl-3 d-flex justify-content-evenly list-group">
            {store.planets?.map((item) => {
              return (
                <Card
                  key={item.uid}
                  cardName={item.name}
                  cardLink= {"/planet/"+ item.uid}
                />
              );
            })}
        </div>
      </div>
      <div className="pt-5" id="scrollspyVehicles">
        <h2>Vehículos</h2>
        <div className="col-12 col-md-6 col-xl-3 d-flex justify-content-evenly list-group">
            {store.vehicles?.map((item) => {
              return (
                <Card
                  key={item.uid}
                  cardName={item.name}
                  cardLink= {"/vehicle/"+ item.uid}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Info;
