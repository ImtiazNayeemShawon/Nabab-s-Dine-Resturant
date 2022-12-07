import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import DeliveryIntro from "./Components/DeliveryIntro";
import Menu from "./Components/Menu";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <DeliveryIntro />
      <Menu />
      <Footer/>
      {/*
      <Routes>
      <Route path="/" element={} />
      <Route path="/" element={ }/>

  </Routes>*/}
    </div>
  );
}

export default App;
