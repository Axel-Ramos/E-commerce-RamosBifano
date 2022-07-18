import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div>
        <ItemListContainer/>
      </div>
    </div>
  );
}

export default App;
