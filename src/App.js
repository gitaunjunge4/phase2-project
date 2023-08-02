import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Homepage from "./components/Homepage";


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

  const eachCar = cars.map((element)=>{
    return(

      <Homepage key={element.id} car={element}/>
  
    )
  })

  return (
    <div className="App">
      <h1>CarHub</h1>
          <div className='biggerDiv'>
          {eachCar}
          </div>
    </div>
  );
}

export default App;
