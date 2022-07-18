import { useState } from "react";
import "./ItemListContainer.css";

function ItemListContainer(){
    const [contador, actualizarContador]=useState(0);
    function sumarContador(){
        actualizarContador(contador+1)
    };
    function restarContador(){
        if(contador<1){
            contador=0
        }
        actualizarContador(contador-1)
    };
    return(

        <div className="cart">
            <h3>Nombre del Producto</h3>
            <img src="#" alt="Imagen del Producto" />
            <p>Caracteristicas del Producto</p>
            <p>Precio del Producto</p>
            <div className="cart--cantidad">
                <button onClick={restarContador} className="boton-menos">-</button>
                {contador}
                <button onClick={sumarContador} className="boton-mas">+</button>
            </div>
            <button>Agregar al Carrito</button>
        </div>
    )
}
export default ItemListContainer;