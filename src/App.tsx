import React from 'react';
import HomePage from "./pages/HomePage";
import {Routes, Route} from "react-router-dom";
import ProductCart from "./features/cart/ProductCart/ProductCart";
import Header from "./component/layout/Header/Header";


function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<ProductCart/>} />
        </Routes>
    </div>
  );
}

export default App;
