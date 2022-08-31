import { useState } from "react";
import {BsFillCartXFill} from "react-icons/bs"
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import { setOrden, ActualizarStock } from "../../Helpers/Helpers";
import Formulario from "./Formulario/Formulario"
import "./CartContainer.css";

const CartContext = () => {
    const { cartList, vaciarCarrito, eliminarProducto, precioTotal } = useCartContext()
    const [ id, setId ] = useState('')
    //Crea el objeto para guardar las ordenes
    const guardarOrden = async (e,formData) => {
        e.preventDefault()
        
        const orden = {}
        orden.comprador = formData

        orden.producto = cartList.map(producto => {
            return {
                producto: producto.nombre,
                id: producto.id,
                precio: producto.precio
            }
        })
        orden.date = new Date()
        orden.total = precioTotal()

        setOrden(orden)
        .then (resp=> setId(resp.id)) //Ante compra exitosa, te muestra el id de la compra
        ActualizarStock(cartList, vaciarCarrito) //Actualiza el stock de la base de datos
    }
    return (
        <div>
            {id.length === 0 ? 
                <div>
                    {cartList.length===0 ? 
                        <div className="vacio">
                            <h1 className="carritoVacio"><BsFillCartXFill/></h1>
                            <p className="texto">Su carrito esta vacio</p>
                            <p className="texto">Por favor, seleccione un producto</p>
                            <Link to={'/'} className="links"><button className="botonProductos" >Seleccionar Productos</button></Link>
                        </div>
                        :
                        <div>
                        <h1 className="texto">Carrito</h1>
                        <div className="cartContext">
                            <div>
                                <div>
                                    <ul className="carrito">
                                        <li className="textoCarrito cart">PRODUCTO</li>
                                        <li className="textoCarrito cart">NOMBRE</li>
                                        <li className="textoCarrito cart">CANTIDAD</li>
                                        <li className="textoCarrito cart">PRECIO</li>
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
                                                    <p className="textoCart">Precio: ${carrito.cantidad * carrito.precio}</p>
                                                    <button onClick={()=>eliminarProducto(carrito.id) } className="botonEliminar"> X </button>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <div className="totalCart">
                                    <h3>{ precioTotal() !== 0 && `Precio Total: $${ precioTotal() }`}</h3>
                                    <button onClick={vaciarCarrito} className="botonEliminar">Vaciar carrito</button>
                                </div>
                            </div>
                            <Formulario guardarOrden={guardarOrden}/>
                            </div>
                        </div>
                    }
                </div> 
                : 
                <div className="texto">
                    <h2>COMPRA EXISTOSA!!!</h2>
                    <h4>El id de la orden es:  {id}</h4>
                    <p>Muchas gracias por confiar en nosotros</p>
                </div> 
            }
        </div>
    )

}
export default CartContext;