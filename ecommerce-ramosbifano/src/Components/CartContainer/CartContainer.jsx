import {BsFillCartXFill} from "react-icons/bs"
import { useCartContext } from "../../Context/CartContext";
import Cart from "./Cart/Cart";
import "./Cart.css";

const CartContext = () => {
    const {cartList}=useCartContext()
    return (
        <div>
            {cartList.length===0 && 
            <div className="vacio">
                <h1 className="carritoVacio"><BsFillCartXFill/></h1>
                <p className="texto">Su carrito esta vacio</p>
                <p className="texto">Por favor, seleccione un producto</p>
            </div>
            }
            {cartList.length >0 && <Cart/>}
        </div>
    )

}
export default CartContext;