import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "./components";
import {
  HomePage,
  Products,
  AddProduct,
  UpdateProduct,
  ProductDetail,
} from "./pages";
import "./app.css";

function App(): React.ReactElement {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/updateProduct/:id" element={<UpdateProduct />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
