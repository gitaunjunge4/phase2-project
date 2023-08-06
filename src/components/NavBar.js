import { Link } from "react-router-dom"
export default function NavBar(){

    return(
        <nav  id="CarNav" className="navbar navbar-expand-lg   fixed-top navbar-light bg-light">
        <img id="navImg" src="https://i.pinimg.com/1200x/8d/70/80/8d7080b16907cac130db4d389ad113cf.jpg"/>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <Link  className="nav-link"  to={"/"}>Home <span className="sr-only">(current)</span></Link>
             
            </li>

            <li className="nav-item">
            <Link  className="nav-link"  to={"/yard"}>Yard<span className="sr-only">(current)</span></Link>
          
            </li>

            <li className="nav-item">
            <Link  className="nav-link"  to={"/about"}>About us<span className="sr-only">(current)</span></Link>
          
            </li>
           
            <li className="nav-item">
            <Link  className="nav-link"  to={"/contact"}>Contact Us <span className="sr-only">(current)</span></Link>
            </li>
          </ul>
        
        </div>
      </nav>
    )
}