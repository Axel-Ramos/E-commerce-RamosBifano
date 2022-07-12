import "./navbar.css";
import CartShop from "../CartShop/CartShop";

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
            <CartShop/>
          </div>
      </nav>
      <nav>
        <div>
          <ul className="navbar-productos">
            <li className="navbar-listap"><a href="#"> Cucharas</a></li>
            <li className="navbar-listap"><a href="#"> Máscara Facial</a></li>
            <li className="navbar-listap"><a href="#"> Cortantes</a></li>
            <li className="navbar-listap"><a href="#"> Set Geometría</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
export default Navbar;