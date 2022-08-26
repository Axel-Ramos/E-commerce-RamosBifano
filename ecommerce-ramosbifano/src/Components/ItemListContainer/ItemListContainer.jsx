import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore"
import ItemList from "./ItemList/ItemList";
import Spinner from "../Loading/Loading";
import "./ItemListContainer.css";

function ItemListContainer(){
    const [productos, setProductos]=useState([])
    const [carga, setCarga]=useState(true)
    const {categoriaId}=useParams()

    useEffect(()=>{
        if (categoriaId) {
            const db = getFirestore()
            const queryCollection=collection(db, "poductos")
            const queryFiltrada= query(queryCollection, where("categoria","==", categoriaId))
            getDocs(queryFiltrada)
            .then(respuesta=>setProductos(respuesta.docs.map(productos=>({id:productos.id, ...productos.data()}))))
            .catch(err=>console.log(err))
            .finally(()=>setCarga(false))
        } else {
            const db = getFirestore()
            const queryCollection=collection(db, "poductos")
            getDocs(queryCollection)
            .then(respuesta=>setProductos(respuesta.docs.map(productos=>({id:productos.id, ...productos.data()}))))
            .catch(err=>console.log(err))
            .finally(()=>setCarga(false))
        }

    },[categoriaId])
    return(
        <div>
            {carga ? <div className="contenedor"><Spinner/></div>
            :
            <ItemList productos={productos}/>}
        </div>
    )
}
export default ItemListContainer;