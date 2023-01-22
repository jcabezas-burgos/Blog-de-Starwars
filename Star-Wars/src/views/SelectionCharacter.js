import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LearnMoreCharacter from "../components/LearnMoreCharater";

function SelectionCharacter() {
  return (
    <div className="selection">
      <Header />
      <Navbar />
      <LearnMoreCharacter />
      <Footer />
    </div>
  );
}

export default SelectionCharacter;