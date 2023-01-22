import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LearnMorePlanet from "../components/LearnMorePlanet";

function SelectionPlanet() {
  return (
    <div className="selection">
      <Header />
      <Navbar />
      <LearnMorePlanet />
      <Footer />
    </div>
  );
}

export default SelectionPlanet;