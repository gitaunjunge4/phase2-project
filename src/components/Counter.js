import React from 'react'

function Counter() {
  return (
    <div className="container" style={{marginTop:"7%"}}>
	<div className="row">
	    <br/>
	   <div className="col text-center">
		<h2>Our track record </h2>
		<p>number of services delivered </p>
		</div>
		
             
		
	</div>
		<div className="row text-center">
	        <div className="col">
	        <div className="counter">
      <i className="fa fa-user-plus fa-2x"></i>
      <h2 className="timer count-title count-number" data-to="120" data-speed="1500"></h2>
       <p className="count-text ">Our Customers</p>
    </div>
	        </div>
              <div className="col">
               <div className="counter">
      <i className="fa fa-users fa-2x"></i>
      <h2 className="timer count-title count-number" data-to="700" data-speed="1500"></h2>
      <p className="count-text ">Happy Clients</p>
    </div>
              </div>
              <div className="col">
                  <div className="counter">
      <i className="fa fa-car fa-2x"></i>
      <h2 className="timer count-title count-number" data-to="11900" data-speed="1500"></h2>
      <p className="count-text ">Cars Sold </p>
    </div></div>
              <div className="col">
              <div className="counter">
      <i className="fa fa-coffee fa-2x"></i>
      <h2 className="timer count-title count-number" data-to="157" data-speed="1500"></h2>
      <p className="count-text ">Coffee With Clients</p>
    </div>
              </div>
         </div>
</div>
  )
}

export default Counter