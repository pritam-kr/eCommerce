import { Routes, Route } from "react-router-dom";
import "./App.css";
 import Cart from "./Pages/Cart/Cart";
import Product from "./Pages/Products/Product";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";

function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<SingleProduct />} />
      </Routes>
    </div>
  );
}

export default App;
