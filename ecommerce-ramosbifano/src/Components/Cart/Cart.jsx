import { useCartContext } from "../../Context/CartContext";

const Cart = () => {
    const { cartList, vaciarCarrito } = useCartContext()

    return (
        <div>
            <h1>Carrito</h1>
            <ul>
                {cartList.map(item => (
                    <li key={item.id}>
                        <div className="w-25">
                            <img src={item.imagen} alt="Foto de producto" className="w-25" />
                            nombre: {item.nombre} - cantidad {item.cantidad} {item.precio} - Precio: {item.cantidad * item.precio}
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