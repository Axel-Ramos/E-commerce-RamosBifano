import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore"
import ItemList from "./ItemList/ItemList";

import "./ItemListContainer.css";

function ItemListContainer(){
    const [productos, setProductos]=useState([])
    const [carga, setCarga]=useState(true)
    const {categoriaId}=useParams()

    useEffect(()=>{
        const db = getFirestore()
        const queryCollection=collection(db, "poductos")
        if (categoriaId) {
            const queryFiltrada= query(queryCollection, where("categoria","==", categoriaId))
            getDocs(queryFiltrada)
            .then(respuesta=>setProductos(respuesta.docs.map(productos=>({id:productos.id, ...productos.data()}))))
            .catch(err=>console.log(err))
            .finally(()=>setCarga(false))
        } else {
            getDocs(queryCollection)
            .then(respuesta=>setProductos(respuesta.docs.map(productos=>({id:productos.id, ...productos.data()}))))
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