import { ReactElement } from "react";
import { HomePage } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbars } from "./components";

function App(): ReactElement {
  return (
    <BrowserRouter>
     <Navbars />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
