import Item from "./Item/Item";

function ItemList({productos}){
    return(
        <div className="cart">
            {productos?.map(producto=>
            <Item key={producto.id} producto={producto}/>)}
        </div>
        
    )
}
export default ItemList;