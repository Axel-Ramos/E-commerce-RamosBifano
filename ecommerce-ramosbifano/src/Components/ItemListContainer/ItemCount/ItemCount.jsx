import {useState} from "react";

function Contador({initial=1, stock=10, onAdd}){
    const [contador, actualizarContador]=useState(initial);
    //Funcion para sumar cantidad
    function sumarContador(){
        if(contador<stock){
          actualizarContador(contador+1)  
        }
    };
    //Funcion para restar cantidad
    function restarContador(){
        if(contador>initial){
            actualizarContador(contador-1)
        }
    };
    //Funcion para agregar al carrito
    function agregarCarrito(){
        if(contador<stock){
            onAdd(contador)
        }
    }
    return(
        <div>
            <div className="detalleProducto--cantidad">
                <button onClick={restarContador} className="boton-menos">-</button>
                <p className="cantidadDetalle">{contador}</p>
                <button onClick={sumarContador} className="boton-mas">+</button>
            </div>
            <button onClick={agregarCarrito} className="botonCarrito">Agregar al Carrito</button>
        </div>
    )
}
export default Contador;