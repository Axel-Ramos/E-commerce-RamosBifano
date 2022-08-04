import { useState } from "react";
import { Link } from "react-router-dom";
import Contador from "../../ItemListContainer/ItemCount/ItemCount";
import { useCartContext } from "../../../Context/CartContext";

const DetalleProducto=({producto})=>{
    
    const [isCount, setIsCount]=useState(true)
    const { agregarCarrito } = useCartContext()

    const onAdd=(cantidad)=>{
        console.log("La cantidad es:"+cantidad)
        agregarCarrito( { ...producto, cantidad: cantidad } )
        setIsCount(false)
    }
    return(
        <div className="detalleProducto">
            <img src={producto.imagen} alt="Imagen del Producto" className="imagenDetalle"/>
            <div>
                <h1 className="tituloDetalle">{producto.nombre}</h1>
                <p className="textoProductos">Descripcción: {producto.descripcion}</p>
                <p className="textoProductos">Precio: ${producto.precio}</p>
                <div>
                { isCount  ?  
                    <Contador initial={1} stock={8} onAdd={onAdd} /> 
                    :
                    <>
                        <Link to={'/cart'}><button className="botonCarrito" >Terminar Compra</button></Link>
                        <Link to={'/'}><button className="botonCarrito" >Seguir Comprando</button></Link>
                    </>
                }

                </div>
            </div>
    </div>
    )
}
export default DetalleProducto;