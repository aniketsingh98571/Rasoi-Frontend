import React from "react"
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import UserSignUp from "./components/UserSignUp/UserSignUp";
import UserSignIn from "./components/UserSignIn/UserSignIn";
import SellerSignUp from "./components/SellerSignUp/SellerSignUp";
import SellerSignIn from "./components/SellerSignIn/SellerSignIn";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>     
        <Route exact path="/" element={<UserSignIn/>}/>
        <Route exact path="/UserSignUp" element={<UserSignUp/>}/>
        <Route exact path="/SellerSignUp" element={<SellerSignUp/>}/>
        <Route exact path="/SellerSignIn" element={<SellerSignIn/>}/>
        </Routes>
 
        </BrowserRouter>
    </div>
  );
}

export default App;
