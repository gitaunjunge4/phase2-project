import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Homepage from "./components/Homepage";

import Carpage from './components/Carpage';
import { Route,Routes, } from 'react-router-dom';
import Yard from './components/Yard';
import Contact from './components/Contact';
 


function App() {

  const [cars, setCars] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/cars")
    .then((r)=> r.json())
    .then(data =>{
      console.log(data)
      setCars(data)
    })
  }, [])

 
  return (

  <Routes>

<Route path='/carpage/:carID' element={<Carpage  car={cars}/>} />
<Route path='/' element={<Homepage car={cars}/>} />
<Route path='/yard' element={<Yard car={cars} />} />
<Route path='/contact' element={<Contact />}/>

  </Routes>
   


  )


}

export default App;
