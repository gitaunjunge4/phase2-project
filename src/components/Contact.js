import React from 'react'

function Contact() {


function displayMessage(e){
	e.preventDefault()
	return(
		<div>
			<button type="button" class="btn btn-primary" id="liveToastBtn">Show live toast</button>

<div class="position-fixed bottom-0 right-0 p-3" style="z-index: 5; right: 0; bottom: 0;">
  <div id="liveToast" class="toast hide" role="alert" aria-live="assertive" aria-atomic="true" data-delay="2000">
    <div class="toast-header">
      <img src="..." class="rounded mr-2" alt="..."/>
      <strong class="mr-auto">Message</strong>
      <small>10 seconds ago</small>
      <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="toast-body">
      Message received succesfuly.
    </div>
  </div>
</div>

		</div>
	)
}



  return (
    <div>

<div id="contact" className="contact-area section-padding">
	<div className="container">										
		<div className="section-title text-center">
			<h1>get in touch with us!</h1>
			<p>If you have any questions or inquiries, feel free to get in touch with us!</p>
		</div>					
		<div className="row">
			<div className="col-lg-7">	
				<div className="contact">
					<form className="form" name="enq" >
						<div className="row">
							<div className="form-group col-md-6">
								<input type="text" name="name" className="form-control" placeholder="Name" required="required"/>
							</div>
							<div className="form-group col-md-6">
								<input type="email" name="email" className="form-control" placeholder="Email" required="required"/>
							</div>
							<div className="form-group col-md-12">
								<input type="text" name="subject" className="form-control" placeholder="Subject" required="required"/>
							</div>
							<div className="form-group col-md-12">
								<textarea rows="6" name="message" className="form-control" placeholder="Your Message" required="required"></textarea>
							</div>
							<div className="col-md-12 text-center">
								<button type="submit" onClick={(e)=>displayMessage(e)} value="Send message" name="submit" id="submitButton" className="btn btn-contact-bg" title="Submit Your Message!">Send Message</button>
							</div>
						</div>
					</form>
				</div>
			</div>
			<div className="col-lg-5">
				<div className="single_address">
					<i className="fa fa-map-marker"></i>
					<h4>Our Address</h4>
					<p>3481 Car place ,Nairobi Kenya</p>
				</div>
				<div className="single_address">
					<i className="fa fa-envelope"></i>
					<h4>Send your message</h4>
					<p>carplaceinfo@gmail.com</p>
				</div>
				<div className="single_address">
					<i className="fa fa-phone"></i>
					<h4>Call us on</h4>
					<p>(+254) 7 876 543 210</p>
				</div>
				<div className="single_address">
					<i className="fa fa-clock-o"></i>
					<h4>Work Time</h4>
					<p>Mon - Fri: 08.00 - 16.00. <br/>Sat: 10.00 - 14.00</p>
				</div>					
			</div>
		</div>
	</div>
</div>
    </div>

  )
}

export default Contact