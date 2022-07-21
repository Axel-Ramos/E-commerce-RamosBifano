let productos=[
    {"id":1,"categoria":"cuchara","nombre": "Cuchara Helado","imagen": "../../imagenes/cuchara1.jpeg","precio": 100,"unidad":20},
    {"id":2,"categoria":"máscara facial","nombre":"Máscara Facial","imagen":  "../../imagenes/mascara-facial1.jpeg","precio":300,"unidad":1},
    {"id":3,"categoria":"cortante","nombre": "Cortante Forma","imagen": "../../imagenes/cortante-formas.jpeg","precio": 300,"unidad":20},
    {"id":4,"categoria":"cortante","nombre": "Cortante Letra","imagen": "../../imagenes/cortante-letra.jpeg","precio": 230,"unidad":24},
    {"id":5,"categoria":"cortante","nombre": "Cortante Número","imagen": "../../imagenes/cortante-numero.jpeg","precio": 250,"unidad":10},
    {"id":6,"categoria":"set geometria","nombre":"Set Geometría","imagen":"../../imagenes/set-geometria1.jpeg","precio":320,"unidad":50}
]

export const getFetch=()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productos)
        },3000)
    })
}