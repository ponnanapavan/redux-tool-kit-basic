import { useEffect, useState } from "react";
import Product from "./components/Product";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import store from "./store/store";
function App() {
  return (
  <Provider store={store}>
    <BrowserRouter>
    <Navbar/>
    <div className="App">
     <Routes>
      <Route path="/" element={<Product/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/cart" element={<Cart/>}/>
     </Routes>
    </div>
    </BrowserRouter>
  </Provider>
    
    
  );
}

export default App;
