import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import ItemDetail from "./ItemDetail/ItemDetail"


const ItemDetailContainer=()=>{
    const [producto, setProducto]=useState({})
    const [carga, setCarga]=useState(true)
    const {detalleId}=useParams();
    
    useEffect(()=>{
        const db = getFirestore()
        const queryProducto = doc(db, 'items', detalleId)
        getDoc(queryProducto)
        .then(resp => setProducto( { id: resp.id, ...resp.data() } ) )
        .catch( err => console.log(err) )
        .finally(()=>setCarga(false))
    },[detalleId])
    return(
        <div>
            {carga ? <h1>Cargando...</h1>
            :
            <ItemDetail producto={producto}/>}
        </div>

    )
}
export default ItemDetailContainer;