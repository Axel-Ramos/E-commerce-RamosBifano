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
    //traer los productos de la base de datos
    useEffect(()=>{
        const db = getFirestore()
        const queryCollection=collection(db, "productos")
        const queryFiltrada= categoriaId? query(queryCollection, where("categoria","==", categoriaId)): queryCollection
        getDocs(queryFiltrada)
        .then(respuesta=>setProductos(respuesta.docs.map(producto=>({id:producto.id, ...producto.data()}))))
        .catch(err=>console.log(err))
        .finally(()=>setCarga(false))
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