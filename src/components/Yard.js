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
  
const displayCar = Object.keys(car).map((carID) => {
      return (
        <div>
          <div className="card" style={{ width: "18rem", height: "25rem" }}>
            <img
              src={car[carID].image_url}
              className="card-img-top"
              alt="Image"
            />
            <div className="card-body">
              <h5 className="card-title">
                <b>
                  {car[carID].car_model_year} {car[carID].car}{" "}
                  {car[carID].car_model}
                </b>{" "}
              </h5>
              <p className="card-text" id="price">
                Price: <b>{car[carID].price}</b>
              </p>
              <p className="card-text">
                {gearsIcon} <b>Transmission: {car[carID].car_transmission}</b>
              </p>
              <p className="card-text">
                {engineIcon} <b>Engine capacity: {car[carID].car_engine_size}</b>
              </p>
              <Link to={`/carPage/${carID}`}>
                <button className="btn btn-primary" id="viewCar">
                  View Car
                </button>
              </Link>
  
              <button
                className="btn btn-primary"
                id="deleteCar"
                onClick={onDelete}
              >
                {trashIcon}
              </button>
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