import { useCartContext } from "../../Context/CartContext";

const Cart = () => {
    const { cartList, vaciarCarrito } = useCartContext()

    return (
        <div>
            <h1>Carrito</h1>
            <ul>
                {cartList.map(carrito => (
                    <li key={carrito.id}>
                        <div className="w-25">
                            <img src={carrito.imagen} alt="Foto de producto" className="w-25" />
                            <div>
                                <p>nombre: {carrito.nombre}</p>
                                <p>cantidad {carrito.cantidad}</p>
                                <p>Precio: {carrito.cantidad * carrito.precio}</p> 
                            </div>
                        </div>
                        <button> X </button>
                    </li>
                ))}
            </ul>
            <button onClick={vaciarCarrito}>Vaciar carrito</button>
        </div>
    )

}
export default Cart;