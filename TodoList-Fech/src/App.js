import "bootstrap/dist/css/bootstrap.min.css"
import React, { useState, useEffect } from "react";

function App() {

  const [Items, setItems] = useState("");
  const [List, setList] = useState([]);

  useEffect(() => {
    getTareas()
  }, [])


  const getTareas = () => {
    fetch('https://assets.breatheco.de/apis/fake/todos/user/jc',
      {
        method: "GET",

      })
      .then(resp => {
        console.log(resp, "respuesta");
        return resp.json();
      })
      .then(data => { setList(data); })
      .catch(error => {
        console.log(error);
      });
  }

  const putTareas = (Items) => {
    fetch('https://assets.breatheco.de/apis/fake/todos/user/jc',
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Items)

      })
      .then(resp => {
        console.log(resp, "respuesta");
        return resp.json();
      })
      .then(data => { console.log(data); })
      .catch(error => {
        console.log(error);
      });
  }
  const modificarTareas = (Items) => {
    fetch('https://assets.breatheco.de/apis/fake/todos/user/jc',
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Items)
      })
      .then(resp => {
        console.log(resp, "respuesta");
        return resp.json();
      })
      .then(data => { console.log(data); })
      .catch(error => {
        console.log(error);
      });
  }

  
  const newItems = (event) => {
    setItems(event.target.value);

  }

  

  const deleteItems = (indice) => {
    setList(List.filter((Items, index) => index !== indice))
    let deletetask = List.filter((Items, index) => index !== indice)
    modificarTareas(deletetask)
  }


  const saveItems = (event) => {
    event.preventDefault();
    let nuevaAct = { label: Items, done: false }
    setList(List.concat(nuevaAct))
    setItems("")
    
    let newTasks = List.concat(nuevaAct)
    putTareas(newTasks)
  }


  return (
    <div className="contaner container fluid bg-light pb-3 mt-3"
    style={{ width: "560px" }}>
      <div className="row align-items-center">
        <div className='row'>

          <h2 className='text-center'>TODOLIST: </h2>
          <form onSubmit={saveItems}>

            <input
              type="text"
              placeholder="Agregar tarea..."
              className="form-control mb-4 border-info bg-success p-2 text-dark bg-opacity-25"
              value={Items.label}
              onChange={newItems} 
            />
          </form>

          <div className="card-header row">
            <ul className='list-group list-group-flush'>
              {List.length > 0 ?
                List.map((Items, indice) => (
                  <li className="list-group-item">
                  <button 
                    key={Items.label}
                    type="button"
                    onClick={() => deleteItems(indice)}
                  >
                    <div className='card-body'> {Items.label}
                    </div>
                  </button>
                  </li>

                )) : "No tienes tareas!"}

            </ul>
          </div>

        </div>
      </div>
    </div >

  );
}

export default App;