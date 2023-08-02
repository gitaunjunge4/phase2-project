import React from 'react';
import '../App.css';
// import { useState, useEffect } from 'react';

function Homepage({car}){
    
    return(
        <>
        <div className="card" style={{width:" 18rem"}}>
            <img src={car.image_url} className="card-img-top" alt="Image"/>
            <div className="card-body">
                <h5 className="card-title">{car.car_model_year} {car.car} {car.car_model}</h5>
                <p className="card-text" id="price">Price: <b>{car.price}</b></p>
                <p className="card-text"> Transmission: {car.car_transmission}</p>
                <p className="card-text">Engine capacity:{car.car_engine_size}</p>

                <button className='btn btn-primary'>View Car</button>
            </div>
        </div>
        </>
    )
}

export default Homepage;