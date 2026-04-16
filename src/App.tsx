import React from 'react';
import HomePage from "./pages/HomePage";
import {Routes, Route} from "react-router-dom";
import ProductCartPage from "./pages/ProductCartPage/ProductCartPage";
import Header from "./component/layout/Header/Header";
import ProductCard from "./pages/ProductCard/ProductCard";


function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<ProductCartPage/>} />
            <Route path="/product/:id" element={<ProductCard/>} />
        </Routes>
    </div>
  );
}

export default App;
