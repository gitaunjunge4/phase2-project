import React from 'react';
import '../App.css';


function Carousel(){
    return(
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active" >
          <img id='carousel-one' src="https://getwallpapers.com/wallpaper/full/1/4/4/1234390-cool-super-car-wallpaper-3840x2160.jpg" className="d-block w-100" alt="Image"/>
        </div>
        <div className="carousel-item">
          <img id='carousel-two' src="https://www.pixelstalk.net/wp-content/uploads/2016/03/Supercar-Lamborghini-Wallpaper-free-download.jpg" className="d-block w-100" alt="Image"/>
        </div>
        <div className="carousel-item">
          <img id='carousel-three' src="https://getwallpapers.com/wallpaper/full/e/3/4/954521-cool-supercar-wallpaper-hd-1920x1080.jpg" className="d-block w-100" alt="Image"/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </button>
    </div>   
    );
};
  
export default Carousel;
    