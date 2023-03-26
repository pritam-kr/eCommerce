import { Routes, Route } from "react-router-dom";
import "./App.css";
import Cart from "./Pages/Cart/Cart";
import Product from "./Pages/Products/Product";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
