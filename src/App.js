import "./App.css";
import React from "react";
import ConsumerHeader from "./components/ConsumerHeader/ConsumerHeader";
import SellerHeader from "./components/SellerHeader/SellerHeader";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <SellerHeader /> */}
        <ConsumerHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/seller" element={<SellerHeader />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
