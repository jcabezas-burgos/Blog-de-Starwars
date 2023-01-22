import React, {useContext} from "react";
import { Context } from "../store/context";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Info from "../components/Info";

function Home() {
  
  return (
    <div className="Home">
      <Header />
      <Navbar />
      <Info />
      <Footer />
    </div>
  );
}

export default Home;