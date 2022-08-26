import { BsCart3 } from "react-icons/bs";
import { useCartContext } from "../../../Context/CartContext";
import "./CartWidget.css"

function CartWidget() {
    const {cantidadTotal}=useCartContext()
    if (cantidadTotal) {
        return(
        <div className="carrito">
            <h1 className="carro"><BsCart3/>{cantidadTotal}</h1>
            {cantidadTotal()}
        </div>
        )
    } 
}

export default CartWidget;