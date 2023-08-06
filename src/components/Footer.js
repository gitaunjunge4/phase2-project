import React from "react";
import '../App.css';

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer__addr">
          <h1 className="footer__logo">CarHub</h1>

          <h2>Contact</h2>

          <address>
            5534 Somewhere In. Nairobi , Kenya 22193-10212
            <br />
            <a className="footer__btn" href="mailto:example@gmail.com">
              Email Us
            </a>
          </address>
        </div>

        <ul className="footer__nav">
          <li className="nav__item">
            <h2 className="nav__title">Services</h2>

            <ul className="nav__ul">
              <li>
                <a href="#">Car sale</a>
              </li>

              <li>
                <a href="#">Car Repair</a>
              </li>

              <li>
                <a href="#">Car tracking System</a>
              </li>
            </ul>
          </li>

          <li className="nav__item nav__item--extra">
            <h2 className="nav__title">Technology</h2>

            <ul className="nav__ul nav__ul--extra">
              <li>
                <a href="#">ECU Remapping </a>
              </li>

              <li>
                <a href="#">Ecu change </a>
              </li>

              <li>
                <a href="#">Digital Signage</a>
              </li>
              <li>
                <a href="#">Body Kits</a>
              </li>

              
            </ul>
          </li>

          <li className="nav__item">
            <h2 className="nav__title">Legal</h2>

            <ul className="nav__ul">
              <li>
                <a href="#">Privacy Policy</a>
              </li>

              <li>
                <a href="#">Terms of Use</a>
              </li>

              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </li>
        </ul>

        <div className="legal">
          <p>&copy; 2023 Something. All rights reserved.</p>

         
        </div>
      </footer>
    </div>
  );
}

export default Footer;
