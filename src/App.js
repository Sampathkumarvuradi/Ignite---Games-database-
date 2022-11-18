import React from "react";
// Components and Pages
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <GlobalStyles />
      <Routes>
        <Route path='/game/:id' element={<Home />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
