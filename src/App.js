import React from "react"
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import UserSignUp from "./components/UserSignUp/UserSignUp";
import UserSignIn from "./components/UserSignIn/UserSignIn";
import SellerSignUp from "./components/SellerSignUp/SellerSignUp";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>     
        <Route path="/" element={<UserSignUp/>}/>
        <Route path="/UserSignIn" element={<UserSignIn/>}/>
        <Route path="/SellerSignUp" element={<SellerSignUp/>}/>
        
        </Routes>
 
        </BrowserRouter>
    </div>
  );
}

export default App;
