import { ReactElement } from "react";
import { HomePage } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App(): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
