import {useState} from "react";

function Contador(){
    const [contador, actualizarContador]=useState(1);
    function sumarContador(){
        actualizarContador(contador+1)
    };
    function restarContador(){
        if(contador<2){
            contador=1
        }
        actualizarContador(contador-1)
    };
    return(
        <div className="detalleProducto--cantidad">
                <button onClick={restarContador} className="boton-menos">-</button>
                {contador}
                <button onClick={sumarContador} className="boton-mas">+</button>
            </div>
    )
}
export default Contador;