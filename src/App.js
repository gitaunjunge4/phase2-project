import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Homepage from "./components/Homepage";
import Carpage from './components/Carpage';



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
      {/* <h1>Hi</h1>
          <div className='biggerDiv'>
          {eachCar}
          </div> */}
        <Carpage />    
    </div>
  );
}

export default App;
