

import React, { useContext, useEffect } from "react";
import { Context } from "../store/context";
import { useParams } from "react-router-dom";

function LearnMore() {
  const { store, actions } = useContext(Context);
  const { uid } = useParams();
  useEffect(() => {
    actions.getVehicle(uid);
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
            <h5 className="card-title">{store.vehicle.properties?.name}</h5>
            <p className="card-text">
              <small className="text">{store.vehicle.description}</small>
            </p>
            <p className="card-text">
              Cargo capacity: {store.vehicle.properties?.cargo_capacity}
            </p>
            <p className="card-text">
              Crew: {store.vehicle.properties?.crew}
            </p>
            <p className="card-text">
              Manufacturer: {store.vehicle.properties?.manufacturer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearnMore;
