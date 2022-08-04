import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../../Helpers/productos";
import ItemDetail from "./ItemDetail/ItemDetail"


const ItemDetailContainer=()=>{
    const [productos, setProductos]=useState([])
    const {detalleId}=useParams();
    
    useEffect(()=>{
        getFetch(detalleId)
        .then(respuesta=>setProductos(respuesta))
    },[])
    return(
        <div>
            <ItemDetail producto={productos}/>
        </div>

    )
}
export default ItemDetailContainer;