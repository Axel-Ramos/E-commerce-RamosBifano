import React from "react";
import { Link } from "react-router-dom";

const Item =({productos})=>{
    return (
        <div className="cart">
            <div className="products">
                <h2>{productos.nombre}</h2>
                <img src={productos.imagen} alt="Imagen Producto" />
                <Link to={`/detalle/${productos.id}`}><button className="botonDetalles">Ver Detalles</button></Link>
            </div>
        </div>
    )
}
export default Item;