import React from "react";
import { Link } from "react-router-dom";

const Item =({producto})=>{
    return (
        <div className="productos">
            <h2 className="textoProductos">{producto.nombre}</h2>
            <img src={producto.imagen} alt="Imagen Producto" className="imagenProductos"/>
            <Link to={`/detalle/${producto.id}`}><button className="botonDetalles">Ver Detalles</button></Link>
        </div>
    )
}
export default Item;