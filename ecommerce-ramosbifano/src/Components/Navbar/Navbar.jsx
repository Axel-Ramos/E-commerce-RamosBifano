import CartWidget from "./CartWidget/CartWidget"
import LogoFacebook from "./ComponentesLogos/LogoFacabook"
import LogoInstagram from "./ComponentesLogos/LogoInstagram"
import LogoWpp from "./ComponentesLogos/LogoWpp"
import "./Navbar.css"

function Navbar(){
  return(
    <header className="App-header">
      <nav className="navbar">
          <p>KARFAB</p>
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
            <li className="navbar-listap"><a href="#" className="links"> Cucharas</a></li>
            <li className="navbar-listap"><a href="#" className="links"> Máscara Facial</a></li>
            <li className="navbar-listap"><a href="#" className="links"> Cortantes</a></li>
            <li className="navbar-listap"><a href="#" className="links"> Set Geometría</a></li>
            <li><CartWidget/></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
export default Navbar;