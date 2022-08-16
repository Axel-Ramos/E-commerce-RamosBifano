import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Cart from "./Components/CartContainer/CartContainer";
import CartContextProvider from "./Context/CartContext";
import './App.css';

function App() {
  return (
    <BrowserRouter> 
      <CartContextProvider>
        <div className="App">
          <Navbar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/categoria/:categoriaId" element={<ItemListContainer/>}/>
            <Route path="/detalle/:detalleId" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
          </Routes>
      </div>
      </CartContextProvider>
      
    </BrowserRouter>
  );
}

export default App;
