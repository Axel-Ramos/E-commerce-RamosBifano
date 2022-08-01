import Contador from "../../ItemListContainer/ItemCount/ItemCount";

function DetalleProducto(){
    return(
        <div className="detalleProducto">
            <img src="#" alt="Imagen del Producto"/>
            <div>
                <h3 className="textoProductos">Nombre del Producto</h3>
                <p className="textoProductos">Caracteristicas del Producto</p>
                <p className="textoProductos">Precio del Producto</p>
                <Contador/>
                <button>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default DetalleProducto;