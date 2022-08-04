import Item from "../Item/Item";

function ItemList({producto}){
    return(
        <div className="cart">
            {producto?.map(productos=>
            <Item key={productos.id} producto={productos}/>)}
        </div>
        
    )
}
export default ItemList;