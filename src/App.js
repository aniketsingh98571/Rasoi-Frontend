import React from "react"
import "./App.css";
import UserSignUp from "./components/UserSignUp/UserSignUp";
import UserSignIn from "./components/UserSignIn/UserSignIn";
import SellerSignUp from "./components/SellerSignUp/SellerSignUp";
import SellerSignIn from "./components/SellerSignIn/SellerSignIn";
import ConsumerHeader from "./components/ConsumerHeader/ConsumerHeader";
import SellerHeader from "./components/SellerHeader/SellerHeader";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import SellerFirst from "./components/SellerFirst/SellerFirst";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>     
        <Route exact path="/" element={<UserSignIn/>}/>
        <Route exact path="/UserSignUp" element={<UserSignUp/>}/>
        <Route exact path="/SellerSignUp" element={<SellerSignUp/>}/>
        <Route exact path="/SellerSignIn" element={<SellerSignIn/>}/>
        <Route path="/Home" element={[<><ConsumerHeader/> <Home /> <Footer/> </>]} />
        <Route exact path="/cart" element={[<><ConsumerHeader/><Cart /><Footer/></>]} />
        <Route exact path="/seller" element={<SellerHeader />} />
        <Route exact path="/SellerSetUp" element={<SellerFirst/>}/>
        </Routes>
 
        </BrowserRouter>
    </div>
  );
}

export default App;
