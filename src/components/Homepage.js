import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears } from "@fortawesome/free-solid-svg-icons";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
// import { useState, useEffect } from 'react';


function Homepage({car, onDelete}){
    const gearsIcon = <FontAwesomeIcon icon={faGears} />
    const engineIcon = <FontAwesomeIcon icon={faTree} />
    const trashIcon = <FontAwesomeIcon icon={faTrash} />


    return(
        <>        
        <div className="card" style={{width:"18rem", height:"25rem"}}>
            <img src={car.image_url} className="card-img-top" alt="Image"/>
            <div className="card-body">
                <h5 className="card-title"><b>{car.car_model_year} {car.car} {car.car_model}</b> </h5>
                <p className="card-text" id="price">Price: <b>{car.price}</b> </p>
                <p className="card-text"> {gearsIcon} <b>Transmission: {car.car_transmission}</b></p>
                <p className="card-text"> {engineIcon} <b>Engine capacity: {car.car_engine_size}</b></p>

                <button className='btn btn-primary' id="viewCar">View Car</button>
                <button className='btn btn-primary' id="deleteCar" onClick={onDelete}>{trashIcon}</button>

            </div>
        </div>
        </>
    )
}

export default Homepage;