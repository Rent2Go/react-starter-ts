import { ReactElement } from "react";
import { HomePage } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { Footer } from "./components";

function App(): ReactElement {
  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
