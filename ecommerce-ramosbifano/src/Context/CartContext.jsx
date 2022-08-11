import { createContext, useState, useContext } from 'react'

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    const  agregarCarrito = (prod) =>{
        const indexProducto = cartList.findIndex(producto => producto.id === prod.id ) // <- 
        if (indexProducto !== -1) {
            // existe el producto en el carrito
            // cartList[idx].cantidad +=   prod.cantidad    
            let cantidad = cartList[indexProducto].cantidad
            cartList[indexProducto].cantidad = cantidad + prod.cantidad
        }
        setCartList([...cartList,prod])
    }
    const vaciarCarrito = () => {
        setCartList([])
    }
    const precioTotal = ()=>{
        return cartList.reduce( (acumularPrecio, productoObjeto) => acumularPrecio = acumularPrecio + (productoObjeto.price * productoObjeto.cantidad) , 0) // <- precioTotal
    }
    const cantidadTotal = ()=>{
        return cartList.reduce((contador, productoObjeto) => contador += productoObjeto.cantidad , 0) 
    }
    const eliminarProducto = (id) => {
        // setCartList(cartList.splice(pos, 1, ))
        setCartList( cartList.filter(producto => producto.id !== id ) )
    }


    return (
        <CartContext.Provider value={{
            cartList,
            agregarCarrito,
            vaciarCarrito,
            precioTotal,
            cantidadTotal,
            eliminarProducto
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
