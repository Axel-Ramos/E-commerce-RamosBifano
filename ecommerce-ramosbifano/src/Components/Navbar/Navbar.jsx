import {Link} from "react-router-dom";
import LogoFacebook from "./ComponentesLogos/LogoFacabook"
import LogoInstagram from "./ComponentesLogos/LogoInstagram"
import LogoWpp from "./ComponentesLogos/LogoWpp"
import CartWidget from "./CartWidget/CartWidget"
import "./Navbar.css"

function Navbar(){
  return(
    <header className="App-header">
      <nav className="navbar">
          <Link to="/">KARFAB</Link>
          {/* <p>KARFAB</p> */}
          <div>
            <ul className="navbar-media">
              <li className="logos"><LogoFacebook/></li>
              <li className="logos"><LogoInstagram/></li>
              <li className="logos"><LogoWpp/></li>
            </ul>
          </div>
      </nav>
      <nav>
        <div>
          <ul className="navbar-productos">
            <Link to="/categoria/cucharas"><li className="navbar-listap links">Cucharas</li></Link>
            <Link to="/categoria/mascara-facial"><li className="navbar-listap links">Máscara Facial</li></Link>
            <Link to="/categoria/cortantes"><li className="navbar-listap links">Cortantes</li></Link>
            <Link to="/categoria/set-geometria"><li className="navbar-listap links">Set Geometría</li></Link>
            <Link to="/cart"><CartWidget/></Link>
          </ul>
        </div>
      </nav>
    </header>
  )
}
export default Navbar;