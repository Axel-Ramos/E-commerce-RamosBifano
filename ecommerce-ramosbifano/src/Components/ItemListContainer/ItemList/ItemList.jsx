function ItemList(productos){
    return(
        <div className="cart">
            <div className="products">
                <h2>{productos.nombre}</h2>
                <img src={productos.imagen} alt="Imagen Producto" />
                <button className="botonDetalles">Ver Detalles</button>
            </div>
        </div>
    )
}
export default ItemList;