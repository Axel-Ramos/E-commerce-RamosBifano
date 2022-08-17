import { createContext, useState, useContext } from 'react'

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    const  agregarCarrito = (prod) =>{
        const indexProducto = cartList.findIndex(producto => producto.id === prod.id )
        if (indexProducto !== -1) {   
            let cantidad = cartList[indexProducto].cantidad
            cartList[indexProducto].cantidad = cantidad + prod.cantidad
        }else{
            setCartList([...cartList,prod])
        }
        
    }
    const vaciarCarrito = () => {
        setCartList([])
    }
    const precioTotal = ()=>{
        return cartList.reduce( (acumularPrecio, producto) => acumularPrecio = acumularPrecio + (producto.precio * producto.cantidad) , 0)
    }
    const cantidadTotal = ()=>{
        return cartList.reduce((contador, producto) => contador += producto.cantidad , 0) 
    }
    const eliminarProducto = (id) => {
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
