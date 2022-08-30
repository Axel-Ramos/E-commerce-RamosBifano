import {useCartContext} from "../../../Context/CartContext"
import Formulario from "../Formulario/Formulario";

const Cart=()=>{
    const { cartList, vaciarCarrito,eliminarProducto,precioTotal } = useCartContext()
    return(
        <div>
            <h1>Carrito</h1>
            <div className="cartContext">
                <div>
                    <div>
                        <ul className="carrito">
                            <li className="textoCart cart">PRODUCTO</li>
                            <li className="textoCart cart">NOMBRE</li>
                            <li className="textoCart cart">CANTIDAD</li>
                            <li className="textoCart cart">PRECIO</li>
                        </ul>
                    </div>
                    <ul>
                        {cartList.map(carrito => (
                            <li key={carrito.id} className="cart">
                                <div className="detalleCart">
                                    <img src={carrito.imagen} alt="Foto de producto" className="imagenCart" />
                                    <div className="carrito">
                                        <p className="textoCart">{carrito.nombre}</p>
                                        <p className="textoCart">Cantidad: {carrito.cantidad}</p>
                                        <p className="textoCart">Precio: {carrito.cantidad * carrito.precio}</p>
                                        <button onClick={()=>eliminarProducto(carrito.id) } className="botonEliminar"> X </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="totalCart">
                        <h3>{ precioTotal() !== 0 && `Precio Total: ${ precioTotal() }`}</h3>
                        <button onClick={vaciarCarrito} className="botonEliminar">Vaciar carrito</button>
                    </div>
                </div>
                <Formulario/>
            </div>
        </div>
    )
}
export default Cart;