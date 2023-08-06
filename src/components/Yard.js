import React, { useEffect } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears } from "@fortawesome/free-solid-svg-icons";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import { Link } from "react-router-dom";

function Yard({ car  ,Search}) {
// state
const [showCar, setshowCar] = useState();


useEffect(()=>
setshowCar(car),
[])

console.log(car)
// end of state 


function handleChange(e){
  setshowCar(e.target.value)
}


function handleSubmit(e){
  e.preventDefault()
  return  Search(showCar)

}
console.log(showCar)


  const gearsIcon = <FontAwesomeIcon icon={faGears} />;
  const engineIcon = <FontAwesomeIcon icon={faTree} />;

  const displayCar = car.map((carID) => {
    return (
      <div>
        <div key={carID.id} className="card" style={{ width: "18rem", height: "27rem" }}>
          <img src={carID.image_url} className="card-img-top" alt="Image" />
          <div className="card-body">
            <h5 className="card-title">
              <b>
                {carID.car_model_year} {carID.car} {carID.car_model}
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

  function yardBar() {
    return (
      <nav
        id="CarNav"
        className="navbar navbar-expand-lg   fixed-top navbar-light bg-light"
      >
        <img
          id="navImg"
          src="https://i.pinimg.com/1200x/8d/70/80/8d7080b16907cac130db4d389ad113cf.jpg"
        />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to={"/"}>
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={"/yard"}>
                Yard<span className="sr-only">(current)</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={"/about"}>
                About us<span className="sr-only">(current)</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={"/contact"}>
                Contact Us <span className="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0" onSubmit={(e)=>handleSubmit(e)}>
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e)=>{handleChange(e)}}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }

  return (
    <div>
      {yardBar()}

      <div className="biggerDiv">{displayCar}</div>
    </div>
  );
}

export default Yard;
