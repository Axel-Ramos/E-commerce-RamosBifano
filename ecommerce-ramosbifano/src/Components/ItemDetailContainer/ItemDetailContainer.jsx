import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../../Helpers/productos";
import ItemDetail from "./ItemDetail/ItemDetail"


const ItemDetailContainer=()=>{
    const detalleId=useParams();
    
    useEffect(()=>{
        getFetch(detalleId)
        .then(respuesta=>setProductos(respuesta.find(producto=>producto.id===detalleId)))
        .catch(err=>console.log(err))
        .finally(()=>setCarga(false))
    },[detalleId])
    return(
        <div>
            Item Detail Container
            <ItemDetail/>
        </div>

    )
}
export default ItemDetailContainer;