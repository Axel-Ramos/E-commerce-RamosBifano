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
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart carro navbar-listap" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <circle cx="6" cy="19" r="2" />
              <circle cx="17" cy="19" r="2" />
              <path d="M17 17h-11v-14h-2" />
              <path d="M6 5l14 1l-1 7h-13" />
              </svg>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
export default Navbar;