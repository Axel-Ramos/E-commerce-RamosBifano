import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import ItemDetail from "./ItemDetail/ItemDetail"
import Spinner from "../Loading/Loading";


const ItemDetailContainer=()=>{
    const [producto, setProducto]=useState({})
    const [carga, setCarga]=useState(true)
    const {detalleId}=useParams();
    //Traer solo el producto seleccionado 
    useEffect(()=>{
        const db = getFirestore()
        const queryProducto = doc(db, 'productos', detalleId)
        getDoc(queryProducto)
        .then(resp => setProducto( { id: resp.id, ...resp.data() } ) )
        .catch( err => console.log(err) )
        .finally(()=>setCarga(false))
    },[detalleId])
    return(
        <div>
            {carga ? <div className="contenedor"><Spinner/></div>
            :
            <ItemDetail productos={producto}/>}
        </div>

    )
}
export default ItemDetailContainer;