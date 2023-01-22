import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LearnMoreVehicle from "../components/LearMoreVehicle";

function SelectionVehicle() {
  return (
    <div className="selection">
      <Header />
      <Navbar />
      <LearnMoreVehicle />
      <Footer />
    </div>
  );
}

export default SelectionVehicle;