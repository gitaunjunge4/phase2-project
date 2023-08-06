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



  // function handle sort for the yard page
function Search(obj){
  let tester =[];
  cars.filter((element)=>{
    element.id = 23;
    return (tester)


  })
}

 
  return (
    <div className="App">
      <Header />
          <div className='biggerDiv'>
          {eachCar}
          </div>
        <Carpage />    
          <Footer/>
          
    </div>
  );


}

export default App;
