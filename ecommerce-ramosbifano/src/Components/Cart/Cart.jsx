import { useCartContext } from "../../Context/CartContext";
import "./Cart.css";

const Cart = () => {
    const { cartList, vaciarCarrito,eliminarProducto,precioTotal } = useCartContext()

    return (
        <div>
            <h1>Carrito</h1>
            <ul>
                {cartList.map(carrito => (
                    <li key={carrito.id} className="cart">
                        <div className="productoCart">
                            <img src={carrito.imagen} alt="Foto de producto" className="imagenCart" />
                            <div className="detalleCart">
                                <p className="textoCart">{carrito.nombre}</p>
                                <p className="textoCart">Cantidad: {carrito.cantidad}</p>
                                <p className="textoCart">Precio: {carrito.cantidad * carrito.precio}</p>
                                <button onClick={ () => eliminarProducto(carrito.id) }> X </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <div>
                <h3>{ precioTotal() !== 0 && `Precio Total: ${ precioTotal() }`}</h3>
                <button onClick={vaciarCarrito}>Vaciar carrito</button>
            </div>
        </div>
    )

}
export default Cart;