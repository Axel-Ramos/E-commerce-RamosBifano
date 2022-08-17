import { useCartContext } from "../../Context/CartContext";
import Carrito from "./Cart/Cart";
import "./Cart.css";

const Cart = () => {
    const {cartList}=useCartContext()
    return (
        <div>
            {cartList.length===0 && 
            <div>
                Su carrito esta vacio. Por favot seleccione un producto
            </div>}
            {cartList.length >0 && <Carrito/>}
        </div>
    )

}
export default Cart;