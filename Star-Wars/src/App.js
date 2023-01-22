
import './styles/App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import injectContext from "./store/context";
import Home from './views/Home';
import SelectionPlanet from './views/SelectionPlanet';
import SelectionCharacter from './views/SelectionCharacter';
import SelectionVehicle from './views/SelectionVehicle';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/character/:uid' element={<SelectionCharacter />}/>
      <Route path='/planet/:uid' element={<SelectionPlanet />}/>
      <Route path='/vehicle/:uid' element={<SelectionVehicle />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default injectContext(App);