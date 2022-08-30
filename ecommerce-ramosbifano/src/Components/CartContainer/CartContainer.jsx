import {BsFillCartXFill} from "react-icons/bs"
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import Cart from "./Cart/Cart";
import "./CartContainer.css";

const CartContext = () => {
    const {cartList}=useCartContext()
    return (
        <div>
            {cartList.length===0 ? 
            <div className="vacio">
                <h1 className="carritoVacio"><BsFillCartXFill/></h1>
                <p className="texto">Su carrito esta vacio</p>
                <p className="texto">Por favor, seleccione un producto</p>
                <Link to={'/'} className="links"><button className="botonProductos" >Seleccionar Productos</button></Link>
            </div>
            :
            <div>{cartList.length >0 && <Cart/>}</div>
            }
        </div>
    )

}
export default CartContext;