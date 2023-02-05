import React, { useContext, useEffect } from "react";
import { Context } from "../store/context";
import { useParams } from "react-router-dom";

function LearnMoreCharacter() {
  const { store, actions } = useContext(Context);
  const { uid } = useParams();
  useEffect(() => {
    actions.getCharacter(uid);
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
            <h5 className="card-title">{store.character.properties?.name}</h5>
            <p className="card-text">
              <small className="text">{store.character.description}</small>
            </p>
            <p className="card-text">
              Birth year: {store.character.properties?.birth_year}
            </p>
            <p className="card-text">
              Hair color: {store.character.properties?.hair_color}
            </p>
            <p className="card-text">
              Height: {store.character.properties?.height}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearnMoreCharacter;