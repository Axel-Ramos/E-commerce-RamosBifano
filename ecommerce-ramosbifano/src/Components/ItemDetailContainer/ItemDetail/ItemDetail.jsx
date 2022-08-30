import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../Context/CartContext";
import Contador from "../../ItemListContainer/ItemCount/ItemCount";

const DetalleProducto=({productos})=>{
    const [isCount, setIsCount]=useState(true)
    const { agregarCarrito } = useCartContext()
    
    const onAdd=(cantidad)=>{
        agregarCarrito( { ...productos, cantidad: cantidad } )
        setIsCount(false)
    }
    return(
        <div className="detalleProducto">
            <img src={productos.imagen} alt="Imagen del Producto" className="imagenDetalle"/>
            <div>
                <h1 className="tituloDetalle">{productos.nombre}</h1>
                <p className="textoProductos">{productos.descripcion}</p>
                <p className="textoProductos">Precio: ${productos.precio}</p>
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