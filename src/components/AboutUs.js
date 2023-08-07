import React from 'react';

function AboutUs(){
    return (
            <div className="about-section paddingTB60 gray-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-sm-6">
                            <div className="about-title clearfix">
                                <h1>About <span>CarHub</span></h1>
                                <h3>Welcome to CarHub - Your Ultimate Destination for Car Shopping!</h3>
                                <p className="about-paddingB">
                                    At CarHub, we have a passion for automobiles and a commitment to revolutionize the way you buy and sell cars. Our mission is to provide a seamless and enjoyable car shopping experience for both buyers and sellers, making it easier than ever to find your dream car or get the best value for your vehicle. 
                                    </p>
                                <p>
                                Why Choose CarHub? 
                                Vast Selection of Quality Cars: Whether you're looking for a practical sedan, a rugged SUV, a stylish sports car, or anything in between, CarHub has a vast inventory of quality vehicles to suit every taste and budget. 
                                We work with trusted dealerships and private sellers to bring you a wide variety of makes and models, all thoroughly inspected and ready to hit the road.
                                User-Friendly Interface: We understand that car shopping can be overwhelming, so we've designed our website with you in mind. Our user-friendly interface allows you to easily browse through different categories, apply filters, and find the perfect car that matches your preferences and needs.
                                Detailed Vehicle Listings: At CarHub, we believe that transparency is key to building trust with our customers. Each vehicle listing comes with detailed information about its make, model, year, mileage, specifications, and high-resolution images to give you a comprehensive view of the car before making a decision.
                                Sell Your Car Hassle-Free: If you're looking to sell your car, CarHub is the perfect platform for you. We offer a hassle-free selling experience, allowing you to list your car for sale and connect with potential buyers quickly. Our team is here to assist you throughout the process, making sure you get the best price for your vehicle.
                                Financing and Insurance Support: CarHub is not just about helping you find the right car; we also assist you in securing financing and insurance for your new purchase. Our partners offer competitive financing options and insurance packages tailored to your specific needs.
                                Expert Advice and Car Reviews: Making the right car choice requires knowledge and research. Our website features expert advice, informative articles, and unbiased car reviews to help you make an informed decision and find the perfect car that aligns with your lifestyle.
                                </p>

                                <div className="about-icons">
                                    <ul >
                                        <li><a href="https://www.facebook.com/"><i id="social-fb" className="fa fa-facebook-square fa-3x social"></i></a> </li>
                                        <li><a href="https://twitter.com/"><i id="social-tw" className="fa fa-twitter-square fa-3x social"></i></a> </li>
                                        <li> <a href="https://plus.google.com/"><i id="social-gp" className="fa fa-google-plus-square fa-3x social"></i></a> </li>
                                    </ul>
                                </div>
                                </div>
                                </div>
                            <div className="col-md-5 col-sm-6">
                            <div className="about-img">
                                <img src="https://devitems.com/preview/appmom/img/mobile/2.png" alt="Image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
};

export default AboutUs;