import React, { useState } from "react";

function AddCar() {
  const [sell, setSell] = useState([
    {
      car: "",
      car_logo: "",
      car_model: "",
      car_transmission: "",
      fuel_type: "",
      car_color: "",
      car_model_year: "",
      car_engine_size: "",
      price: "",
      availability: true,
      Damages: false,
      theft: false,
      image_url: "",
    },
  ]);


  function handleChange(e){
    let name=e.target.name;
    let value =e.target.value
    setSell({...sell,[name]:[value]})
  }

  return <div>AddCar</div>;
}

export default AddCar;
