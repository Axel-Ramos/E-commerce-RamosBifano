let productos=[
    {
        "id":"1",
        "categoria":"cuchara",
        "nombre":"Cuchara Helado",
        "imagen":"../imagenes/cuchara1.jpeg",
        "precio":"100",
        "descripcion":"Cuchara para helados, dos tipos distintos y de varios colores"
    },
    {
        "id":"2",
        "categoria":"máscara facial",
        "nombre":"Máscara Facial",
        "imagen": "../../Helpers/imagenes/mascara-facial1.jpeg",
        "precio":"300",
        "descripcion":"Máscara facial de plástico comoda y de armado fácil"
    },
    {
        "id":"3",
        "categoria":"cortante",
        "nombre":"Cortante Forma",
        "imagen":"../../Helpers/imagenes/cortante-formas.jpeg",
        "precio":"300",
        "descripcion":"Cortante de forma variadas"
    },
    {
        "id":"4",
        "categoria":"cortante",
        "nombre":"Cortante Letra",
        "imagen":"../../Helpers/imagenes/cortante-letra.jpeg",
        "precio":"230",
        "descripcion":"Cortante con todas las letras de abecedario"
    },
    {
        "id":"5",
        "categoria":"cortante",
        "nombre":"Cortante Número",
        "imagen":"../../Helpers/imagenes/cortante-numero.jpeg",
        "precio":"250",
        "descripcion":"Cartante con los números del 0 al 9"
    },
    {
        "id":"6",
        "categoria":"set geometria",
        "nombre":"Set Geometría",
        "imagen":"../../Helpers/imagenes/set-geometria1.jpeg",
        "precio":"320",
        "descripcion":"Set completo de geometría conteniendo regla de 20,escuadra y transportador"
    }
]

export const  getFetch=(id)=>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if (id) {
                    resolve(productos.find(producto=>producto.id===id))
                }else{
                    resolve(productos)
                }
            },3000)
        })
}