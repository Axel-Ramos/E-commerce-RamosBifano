import { useEffect, useState } from "react";
import Contador from "./ItemCount/ItemCount";
import { getFetch } from "../../helpers/productos";
import "./ItemListContainer.css";

function ItemListContainer(){
    const [productos, setProductos]=useState([])
    const [carga, setCarga]=useState(true)

    useEffect(()=>{
        getFetch()
        .then(respuesta=>setProductos(respuesta))
        .catch(err=>console.log(err))
        .finally(()=>setCarga(false))
    },[])

    console.log(productos)
    return(
        <div>
                {carga ? <h1>Cargando...</h1>
                :
                productos?.map(producto=>
                <div className="cart">
                    <div className="products">
                        <h2>{producto.nombre}</h2>
                        <img src={producto.imagen} alt="Imagen Producto" />
                        <button>Ver Detalles</button>
                    </div>
                </div>)
                }

            <div className="detalleProducto">
                <h3>Nombre del Producto</h3>
                <img src="#" alt="Imagen del Producto"/>
                <p>Caracteristicas del Producto</p>
                <p>Precio del Producto</p>
                <Contador/>
                <button>Agregar al Carrito</button>
            </div>
        </div>
    )
}
export default ItemListContainer;