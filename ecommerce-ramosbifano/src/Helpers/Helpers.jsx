import { addDoc, collection, documentId, getDocs, getFirestore, query, writeBatch, where } from "firebase/firestore"
// actualizar el stock 
export const ActualizarStock = async (cartList, vaciarCarrito)=> {

    const baseDatos =getFirestore() 

    const queryCollectionStock = collection(baseDatos, 'productos')   //Is target collection
    const queryActulizarStock = query(queryCollectionStock, where( documentId() , 'in', cartList.map(it => it.id)))
    const batch = writeBatch(baseDatos)
    await getDocs (queryActulizarStock)
    .then(resp=>resp.docs.forEach(res=>batch.update(res.ref,{stock:res.data().stock-cartList.find(productos=>productos.id===res.id).cantidad})))
    .catch (err => console.log (err))
    .finally(vaciarCarrito())
    batch.commit()
}
//Registra la orden en la base de datos
export const setOrden =(order) =>{
    const baseDatos =getFirestore()
    const queryOrders = collection(baseDatos, 'ordenes')
    return(addDoc(queryOrders,order))
}