export const getState = ({ getActions, getStore, setStore }) => {
    return {
      store: {
        people: [],
        planets: [],
        vehicles: [],
        character: [],
        planet: [],
        vehicle: [],
        favorites: [],
      },
      actions: {
        getPeople: () => {
          fetch("https://www.swapi.tech/api/people/")
            .then((res) => res.json())
            .then((data) => {
              setStore({ people: data.results });
              console.log(data.results, "people");
            })
            .catch((err) => console.error(err));
        },
        getPlanets: () => {
          fetch("https://www.swapi.tech/api/planets/")
            .then((res) => res.json())
            .then((data) => {
              setStore({ planets: data.results });
              console.log(data.results, "planets");
            })
            .catch((err) => console.error(err));
        },
        getVehicles: () => {
          fetch("https://www.swapi.tech/api/vehicles/")
            .then((res) => res.json())
            .then((data) => {
              setStore({ vehicles: data.results });
              console.log(data);
            })
            .catch((err) => console.error(err));
        },
        getCharacter: (uid) => {
          fetch("https://www.swapi.tech/api/people/" + uid)
            .then((res) => res.json())
            .then((data) => {
              setStore({ character: data.result });
              console.log(data.result, "character");
            })
            .catch((err) => console.error(err));
        },
        getPlanet: (uid) => {
          fetch("https://www.swapi.tech/api/planets/" + uid)
            .then((res) => res.json())
            .then((data) => {
              setStore({ planet: data.result });
              console.log(data.result, "planet");
            })
            .catch((err) => console.error(err));
        },
        getVehicle: (uid) => {
          fetch("https://www.swapi.tech/api/vehicles/" + uid)
            .then((res) => res.json())
            .then((data) => {
              setStore({ vehicle: data.result });
              console.log(data.result, "vehicle");
            })
            .catch((err) => console.error(err));
        },
        addFavorites: (favorite) => {
          const store = getStore();
          const one = store.favorites.some((item) => item === favorite);
          if (one === true) {
            return;
          } else {
            setStore(store.favorites.push(favorite));
          }
        },
        deleteFavorites: (index) => {
          const { favorites } = getStore();
          favorites.splice(index, 1);
          setStore(...favorites);
        },
      },
    };
  };
  