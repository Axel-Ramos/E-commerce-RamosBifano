import { useState } from "react"
import "./Formulario.css"

const Formulario=({guardarOrden})=>{
    const [formData, setFormData] = useState({
        nombre:'', 
        telefono:'',
        email:'', 
        rEmail:''
    })
    
    //Revisa lo que se introduce en el Form
    const handleChange = (e) => {
        
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    //Verificación email Form
    const handleSubmit = (e) => {

        if (formData.email !== formData.rEmail){
            alert('Se detecto un ERROR. Ingrese nuevamente su email')
        }
        else {
            delete formData.rEmail
            guardarOrden (e,formData)

        }
        e.preventDefault ()
    }
    return(
        <div>
            <form onSubmit={e => {handleSubmit(e)}} className="formulario" >
                <label className="titulo">Datos Personales</label>
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