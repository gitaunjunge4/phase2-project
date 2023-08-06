import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Homepage from "./components/Homepage";

import Carpage from "./components/Carpage";
import { Route, Routes } from "react-router-dom";
import Yard from "./components/Yard";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import AddCar from "./components/AddCar";

function App() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/cars")
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setCars(data);
      });
  }, []);

  // function handle sort for the yard page
  function Search(obj) {
    return <div></div>;
  }

  return (
    <Routes>
      <Route path="/carpage/:carID" element={<Carpage car={cars} />} />
      <Route path="/" element={<Homepage car={cars} />} />
      <Route  path="/about"  element={<AboutUs />}/>
      <Route path="/yard" element={<Yard car={cars} />} />
      <Route path="/contact" element={<Contact />} />
      <Route  path="/sell" element={<AddCar />}/>
    </Routes>
  );
}

export default App;
