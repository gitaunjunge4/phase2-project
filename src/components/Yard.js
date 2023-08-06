import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears } from "@fortawesome/free-solid-svg-icons";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


function Yard({car,onDelete}) {
    const gearsIcon = <FontAwesomeIcon icon={faGears} />;
    const engineIcon = <FontAwesomeIcon icon={faTree} />;
    const trashIcon = <FontAwesomeIcon icon={faTrash} />;
  
const displayCar = car.map((carID) => {
      return (
        <div>
          <div className="card" style={{ width: "18rem", height: "27rem" }}>
            <img
              src={carID.image_url}
              className="card-img-top"
              alt="Image"
            />
            <div className="card-body">
              <h5 className="card-title">
                <b>
                  {carID.car_model_year} {carID.car}{" "}
                  {carID.car_model}
                </b>{" "}
              </h5>
              <p className="card-text" id="price">
                Price: <b>{carID.price}</b>
              </p>
              <p className="card-text">
                {gearsIcon} <b>Transmission: {carID.car_transmission}</b>
              </p>
              <p className="card-text">
                {engineIcon} <b>Engine capacity: {carID.car_engine_size}</b>
              </p>
              <div className="cardButton"> 

                <Link to={`/carPage/${carID.id}`}>
                <button className="btn btn-primary" id="viewCar">
                  View Car
                </button>
              </Link>
              </div>
            
  
            
            </div>
          </div>
        </div>
      );
    });




  return (
    <div className="biggerDiv">{displayCar}</div>
  )
}

export default Yard