import { useState } from "react"
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore"
import {useCartContext} from "../../../Context/CartContext"
import "./Formulario.css"

const Formulario=()=>{
    const {cartList, precioTotal, vaciarCarrito} = useCartContext()
    const [ id, setId ] = useState('')
    const [formData, setFormData] = useState({
        nombre:'', 
        telefono:'',
        email:'', 
        rEmail:''
    })
    const guardarOrden = async (e) => {
        e.preventDefault()
        
        const orden = {}
        orden.comprador = formData

        orden.producto = cartList.map(producto => {
            return {
                producto: producto.nombre,
                id: producto.id,
                precio: producto.precio
            }
        })
        
        orden.total = precioTotal()

        const db = getFirestore()
        const queryOrders = collection(db, 'ordenes')
        addDoc(queryOrders, orden)
        .then(resp => setId(resp.id))
        .catch(err => console.log(err))
        .finally(()=> setFormData({
                email:'', 
                name:'', 
                phone:'',
                rEmail:''
            })
        )
        const queryCollectionStock = collection(db, 'items') 
        const queryActulizarStock = query(
            queryCollectionStock,  
            where( documentId() , 'in', cartList.map(producto => producto.id))         
        )
        const batch = writeBatch(db)

        await getDocs(queryActulizarStock)
        .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
            stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
        })))
        .catch(err => console.log(err))
        .finally(()=> {vaciarCarrito()})

        batch.commit()

    }
    const handleChange = (e) => {
        
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    return(
        <div className="form">
            <form onSubmit={ guardarOrden } className="formulario" >
                <label className="titulo">Formulario con sus validaciones</label>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Nombre</label>
                    <input type="text" className="form-control" name="name" placeholder="Ingrese el nombre" onChange={handleChange} value={formData.name}/>                        
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Teléfono</label>
                    <input type="text" className="form-control" name="phone" onChange={handleChange} placeholder="Ingrese el teléfono" value={formData.phone}/>                        
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input type="email" className="form-control" name="email" onChange={handleChange} placeholder="Enter email" value={formData.email}/>   
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Repetir Email</label>
                    <input type="email" className="form-control" name="rEmail" placeholder="Enter email" onChange={handleChange} value={formData.rEmail}/>
                </div>
                <button type="submit" className="botonEnviar">Enviar</button>
            </form>
        </div>
    )
}

export default Formulario;