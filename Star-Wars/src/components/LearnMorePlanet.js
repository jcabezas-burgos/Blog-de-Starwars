

import React, { useContext, useEffect } from "react";
import { Context } from "../store/context";
import { useParams } from "react-router-dom";

function LearnMorePlanet() {
  const { store, actions } = useContext(Context);
  const { uid } = useParams();
  useEffect(() => {
    actions.getPlanet(uid);
  }, []);
  return (
    <div className="card text-bg-secondary mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="https://fakeimg.pl/600x400/"
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{store.planet.properties?.name}</h5>
            <p className="card-text">
              <small className="text">{store.planet.description}</small>
            </p>
            <p className="card-text">
            Population: {store.planet.properties?.population}
            </p>
            <p className="card-text">
            Climate: {store.planet.properties?.climate}
            </p>
            <p className="card-text">
            Terrain: {store.planet.properties?.terrain}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearnMorePlanet;