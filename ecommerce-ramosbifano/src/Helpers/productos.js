let productos=[
    {
        id:"1",
        categoria:"cucharas",
        nombre:"Cuchara Helado",
        imagen:"/imagenes/cuchara1.jpeg",
        precio:"100",
        descripcion:"Cuchara para helados, dos tipos distintos y de varios colores"
    },
    {
        id:"2",
        categoria:"mascara-facial",
        nombre:"Máscara Facial",
        imagen:"/imagenes/mascara-facial1.jpeg",
        precio:"300",
        descripcion:"Máscara facial de plástico comoda y de armado fácil"
    },
    {
        id:"3",
        categoria:"cortantes",
        nombre:"Cortante Forma",
        imagen:"/imagenes/cortante-formas.jpeg",
        precio:"300",
        descripcion:"Cortante de forma variadas"
    },
    {
        id:"4",
        categoria:"cortantes",
        nombre:"Cortante Letra",
        imagen:"/imagenes/cortante-letra.jpeg",
        precio:"230",
        descripcion:"Cortante con todas las letras de abecedario"
    },
    {
        id:"5",
        categoria:"cortantes",
        nombre:"Cortante Número",
        imagen:"/imagenes/cortante-numero.jpeg",
        precio:"250",
        descripcion:"Cartante con los números del 0 al 9"
    },
    {
        id:"6",
        categoria:"set-geometria",
        nombre:"Set Geometría",
        imagen:"/imagenes/set-geometria1.jpeg",
        precio:"320",
        descripcion:"Set completo de geometría conteniendo regla de 20,escuadra y transportador"
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
            },1000)
        })
}