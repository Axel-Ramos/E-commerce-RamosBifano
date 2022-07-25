import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetailContainer/ItemDetail"
import "./ItemListContainer.css";

function ItemListContainer(){
    const [productos, setProductos]=useState([])
    const [carga, setCarga]=useState(true)
    useEffect(()=>{
        fetch("../../Helpers/productos.json")
        .then(respuesta=>respuesta.json())
        .then(respuesta=>setProductos(respuesta))
        .catch(err=>console.log(err))
        .finally(()=>setCarga(false))
    },[])
    console.log(productos)
    return(
        <div className="itemContainer">
                {carga ? <h1>Cargando...</h1>
                :
                productos?.map(producto=>
                <div className="cart">
                    <div className="products">
                        <h2>{producto.nombre}</h2>
                        <img src={producto.imagen} alt="Imagen Producto" />
                        <button className="botonDetalles">Ver Detalles</button>
                    </div>
                </div>)}
                <ItemDetail/>
        </div>
    )
}
export default ItemListContainer;