import React from "react";
import { Link } from "react-router-dom";

const Item =({productos})=>{
    return (
        <div className="productos">
            <h2 className="textoProductos">{productos.nombre}</h2>
            <img src={productos.imagen} alt="Imagen Producto" className="imagenProductos"/>
            <Link to={`/detalle/${productos.id}`}><button className="botonDetalles">Ver Detalles</button></Link>
        </div>
    )
}
export default Item;