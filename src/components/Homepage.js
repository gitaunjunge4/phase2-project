import React, { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

import Carousel from "./Carousel";
import Counter from "./Counter";

function Homepage({ car }) {
  const showCar = car.filter((element) => {
    return element.id <= 6;
  });

  const displayShowCar = showCar.map((item) => {
    return (
      <div key={item.id} className="card" style={{ width: "30%" }}>
        <img
          src={item.image_url}
          className="card-img-top"
          alt="displayimg"
          style={{ width: "100%", height: "350px" }}
        />
        <div className="card-body">
          <h5 className="card-title">
            {item.car} {item.car_model}
          </h5>
          <p className="card-text">price {item.price}</p>
          
          <a href={`carpage/${item.id}`} className="btn btn-success">
            Buy Now
          </a>
        </div>
      </div>
    );
  });

  return (
    <div>
      <Carousel />
      <Counter />

      <div
        className="col text-center"
        style={{ marginTop: "5%", marginBottom: "5%" }}
      >
        <h2>Trending Deals </h2>
        <p
          className="btn btn-warning"
          style={{ fontSize: "30px", borderRadius: "10px" }}
        >
          13% OFF
        </p>
      </div>
      <div className="showCarDisplay">{displayShowCar}</div>

      <div className="col text-center" style={{ marginBottom: "5%" }}>
        <Link to="/yard">
        <button
          className="btn btn-success"
          style={{ fontSize: "25px", borderRadius: "10px" }}
        >
          Click to view 
        </button>
        </Link>
        
      </div>
    </div>
  );
}

export default Homepage;
