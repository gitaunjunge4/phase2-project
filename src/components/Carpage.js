import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears } from "@fortawesome/free-solid-svg-icons";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


export default function Carpage() {
  function carImage() {
    return (
      <div>
        <img
          id="car-img-display"
          src="https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1685458010/autoexpress/2023/05/Porsche%20911%20GTS%20UK%20001_otx6j7.jpg"
          alt="image-name"
        />
      </div>
    );
  }

  function carPrice() {
    return (
      <div id="car-display-price">
        <div className="card" style={{ width: "30rem", borderRadius: "1rem" }}>
          <div className="card-body">
            <h5
              className="card-title"
              style={{ textAlign: "left", fontSize: "1.5rem" }}
            >
       
              Car Name
            </h5>
            <h5 className="card-title"> Price $ 23000</h5>
            <button
              href="#"
              style={{ width: "100%" }}
              className="btn btn-outline-success"
            >
              Buy Now
            </button>
            <div id="car-boolen-values">
              {/* remember to place the text according to true or false values */}
              <button className="btn btn-success">Avaliable</button>
              <button className="btn btn-danger">stolen</button>
              <button className="btn btn-warning">No Damages</button>
              
              

              

            </div>
          </div>
        </div>
      </div>
    );
  }

  function feedBack() {
    return (
      <div id="car-display-feedback">
        <div className="card" style={{ width: "30rem", borderRadius: "1rem" }}>
          <div className="card-body">
            <h5
              className="card-title"
              style={{ textAlign: "left", fontSize: "1.5rem" }}
            >
              Reviews
            </h5>
            <button
              href="#"
              style={{ width: "100%" }}
              className="btn btn-outline-warning"
            >
              Total reviews 343
            </button>
          </div>
        </div>
      </div>
    );
  }

  function safetyTips() {
    return (
      <div id="car-safety-tip">
        <div class="card" style={{ width: "30rem", borderRadius: "1rem" }}>
          <div className="card-body">
            <h5 className="card-title" style={{ textAlign: "center" }}>
              SafetyTips
            </h5>
            <ul style={{ textAlign: "start" }}>
              <li>Remember, don't send any pre-payments</li>
              <li>Meet the seller at a safe public place</li>
              <li>Inspect the goods to make sure they meet your needs</li>
              <li>Check all documentation and only pay if you're satisfied</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  function CarDetails() {
    return (
      <section>
        <div className="card">
          <h5 style={{ textAlign: "start" }} className="card-header">
            CarName
          </h5>
          <img
            src="https://1000logos.net/wp-content/uploads/2018/03/Subaru-Logo-1999.jpg"
            id="car-logo"
          />
          <div className="card-body" id="car-details-card">
            <div className="car-model">
              <h5 className="text-muted">Model</h5>
              <p>CarModel</p>
            </div>
            <div className="car-transmission">
              <h5 className="text-muted">Transmission</h5>
              <p>Car Transmission</p>
            </div>

            <div className="car-condition">
              <h5 className="text-muted">Condition</h5>
              <p> car-condition </p>
            </div>

            <div className="fuel">
              <h5 className="text-muted">Fuel-type</h5>
              <p>Car-fuel_type</p>
            </div>

            <div className="color">
              <h5 className="text-muted">color-type</h5>
              <p>Car-color_type</p>
            </div>

            <div className="year">
              <h5 className="text-muted">Year</h5>
              <p>Car-year</p>
            </div>

            <div className="engine">
              <h5 className="text-muted">engine size</h5>
              <p>Car-engine_type</p>
            </div>


           
        
          </div>
        </div>
      </section>
    );
  }

  return (
    <div>
      <div className="carDisplay">
        {carImage()}

        <div>
          <div className="sideBar">{carPrice()}</div>
          <div className="safety tips">{safetyTips()}</div>
          <div className="feedback">{feedBack()} </div>
        </div>
      </div>
      {CarDetails()}
    </div>
  );
}
