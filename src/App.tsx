import { ReactElement } from "react";
import { HomePage, Products } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { Footer } from "./components";
import "./app.css"

function App(): ReactElement {
  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/products" element={<Products />}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
