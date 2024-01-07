import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { HomePage, Products, AddProduct, UpdateProduct, ProductDetail } from "./pages";
import { ProductModel } from "./models/responses/ProductModel";

function App(): React.ReactElement {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/updateProduct" element={<UpdateProduct />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
