import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import Header from "./components/Header"
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

  function handleDelete(id){
    return (
      setCars(cars.filter((car) => car.id !== id))
      )
  };

  const eachCar = cars.map((car)=>{
    return(

      <Homepage
       key={car.id}
        car={car}
        onDelete={() => handleDelete(car.id)}
      />
  
    )
  })

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
