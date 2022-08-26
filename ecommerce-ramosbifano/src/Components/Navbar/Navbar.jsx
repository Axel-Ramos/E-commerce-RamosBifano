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
          <Link to="/" className="links"><p>KARFAB</p></Link>
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
            <Link to="/categoria/cucharas" className="links"><li className="navbar-listap">Cucharas</li></Link>
            <Link to="/categoria/mascara-facial" className="links"><li className="navbar-listap links">Máscara Facial</li></Link>
            <Link to="/categoria/cortantes" className="links"><li className="navbar-listap links">Cortantes</li></Link>
            <Link to="/categoria/set-geometria" className="links"><li className="navbar-listap links">Set Geometría</li></Link>
            <Link to="/cart" className="links"><CartWidget/></Link>
          </ul>
        </div>
      </nav>
    </header>
  )
}
export default Navbar;