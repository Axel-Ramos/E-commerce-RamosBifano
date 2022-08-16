import { useState } from "react";
import { useCartContext } from "../../Context/CartContext";
import Carrito from "./Cart/Cart";
import "./Cart.css";

const Cart = () => {
    const [ id, setId ] = useState('')
    const {cartList}=useCartContext()
    return (
        <div>
            <h1>Carrito</h1>
            {id.length > 0 && <h2>El id de la orden es:  {id}</h2> }
            {cartList.length >0 && <Carrito/>}
        </div>
    )

}
export default Cart;