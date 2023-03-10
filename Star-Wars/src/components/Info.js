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
        <div className="d-flex justify-content-evenly row row-cols-auto">
            {store.people?.map((item) => {
              return (
                <Card
                  key={item.uid}
                  cardName={item.name}
                  cardLink= {"/character/"+ item.uid}
                  buttonClick= {() => { actions.addFavorites(item) }}
                />
              );
            })}
        </div>
      </div>
      <div className="pt-5" id="scrollspyPlanets">
        <h2>Planetas</h2>
        <div className="d-flex justify-content-evenly row row-cols-auto">
            {store.planets?.map((item) => {
              return (
                <Card
                  key={item.uid}
                  cardName={item.name}
                  cardLink= {"/planet/"+ item.uid}
                  buttonClick= {() => { actions.addFavorites(item) }}
                />
              );
            })}
        </div>
      </div>
      <div className="pt-5" id="scrollspyVehicles">
        <h2>Vehículos</h2>
        <div className="d-flex justify-content-evenly row row-cols-auto">
            {store.vehicles?.map((item) => {
              return (
                <Card
                  key={item.uid}
                  cardName={item.name}
                  cardLink= {"/vehicle/"+ item.uid}
                  buttonClick= {() => { actions.addFavorites(item) }}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Info;
