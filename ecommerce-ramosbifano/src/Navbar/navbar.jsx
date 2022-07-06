import "./navbar.css";
import LogoInstagram from "./componentesLogos/logoInstagram";
import LogoFacebook from "./componentesLogos/logoFacabook";
import LogoWpp from "./componentesLogos/logoWpp";


function Navbar(){
    return(
        <header className="App-header">
        <nav className="navbar">
            <p>KARFAB</p>
          <div>
            <ul className="navbar-media">
              <li>"Logo Wpp"</li>
              <li>"Logo Instagram"</li>
              <li>"Logo Facebook"</li>
            </ul>
            <LogoInstagram />
            <LogoFacebook />
            <LogoWpp />
          </div>
        </nav>
        <nav>
          <div>
            <ul className="navbar-productos">
              <li className="navbar-listap">Cucharas</li>
              <li className="navbar-listap">Máscara Facial</li>
              <li className="navbar-listap">Cortantes</li>
              <li className="navbar-listap">Set Geometría</li>
            </ul>
          </div>
        </nav>
      </header>
    )
}

export default Navbar;