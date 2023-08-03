import React from 'react';

function Footer() {
  const handleSelectClick = () => {
    alert('Thanks for subscribing!');
  };

  return (
    <div className="footer"  style={{display:"flex"}}>

<div className="cars">
        <form onSubmit={handleSelectClick}>
            <input type='email'/>
            <button type submit>Subscribe</button>
      
        </form>
      </div>

    {/* <form onSubmit={handleSelectClick}>
        
      <label htmlFor="inquiries">Choose inquiries:</label>

      <select id="inquiries">
        <option value="premium">premium</option>
        <option value="less premium">less premium</option>
        <option value="normal">normal</option>
        <option value="free">free</option>
      </select>
      
      </form > */}
      <div className= "about us">
      <h1 >About us</h1>
      <p>We appreciate you taking the time today to visit our web site.  We offer as well as allow you to conveniently get a quote, schedule a service appointment, or apply for financing..</p>
      </div>
      </div>
      )
          
    }


export default Footer;
