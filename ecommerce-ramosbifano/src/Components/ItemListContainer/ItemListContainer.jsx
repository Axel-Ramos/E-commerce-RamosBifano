import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../../Helpers/productos";
import ItemList from "./ItemList/ItemList";

import "./ItemListContainer.css";

function ItemListContainer(){
    const [productos, setProductos]=useState([])
    const [carga, setCarga]=useState(true)
    const {categoriaId}=useParams()
    useEffect(()=>{
        //Codigo que no funciona de Fetch, el json lo pase a js para hacer el mock
        // fetch("../../Helpers/productos.json")
        // .then(respuesta=>respuesta.json())
        // .then(respuesta=>setProductos(respuesta.results))
        // .catch(err=>console.log(err))
        // .finally(()=>setCarga(false))
        if (categoriaId) {
            getFetch()
            .then(respuesta=>setProductos(respuesta.filter(producto=>producto.categoria===categoriaId)))
            .catch(err=>console.log(err))
            .finally(()=>setCarga(false))
        } else {
            getFetch()
            .then(respuesta=>setProductos(respuesta))
            .catch(err=>console.log(err))
            .finally(()=>setCarga(false))
        }

    },[categoriaId])
    console.log(productos)
    return(
        <div>
            {carga ? <h1>Cargando...</h1>
            :
            <ItemList producto={productos}/>}
        </div>
    )
}
export default ItemListContainer;