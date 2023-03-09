import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopHeader from "./components/topHeader/index.js";
import NavBar from "./components/navbar";
import CartListPage from "./pages/cartList";
import Home from "./pages/home";

function App(props) {
  
  const [quantity, setQuantity] = useState(0);

  return (
    <Router>
      <div id="App">
        <TopHeader />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route
            path="/shoppingCart"
            element={<CartListPage qVal={quantity} setqVal={setQuantity} />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
