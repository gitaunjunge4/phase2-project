import React from 'react';
import '../App.css';


function Carousel(){
    return(
    
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active" >
          <img  id='carousel-one' src="https://getwallpapers.com/wallpaper/full/1/4/4/1234390-cool-super-car-wallpaper-3840x2160.jpg" class="d-block w-100" alt="image"/>
        </div>
        <div class="carousel-item">
          <img id='carousel-two' src="https://www.pixelstalk.net/wp-content/uploads/2016/03/Supercar-Lamborghini-Wallpaper-free-download.jpg" class="d-block w-100" alt="image"/>
        </div>
        <div class="carousel-item">
          <img id='carousel-three' src="https://getwallpapers.com/wallpaper/full/e/3/4/954521-cool-supercar-wallpaper-hd-1920x1080.jpg" class="d-block w-100" alt="image"/>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </button>
    </div>
    
    
        
    );
}
  
export default Carousel;
    