import "./CartProduct.css";

function CartProduct(){
    return(
        <div className="cart">
            <h3>Nombre del Producto</h3>
            <img src="#" alt="Imagen del Producto" />
            <p>Caracteristicas del Producto</p>
            <p>Precio del Producto</p>
            <div className="cart--cantidad">
                <button className="boton-menos">-</button>
                <select name="" id=""></select>
                <button className="boton-mas">+</button>
            </div>
            <button>Agregar al Carrito</button>
        </div>
    )
}
export default CartProduct;