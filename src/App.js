import React from "react";
import "./App.css";
import UserSignUp from "./components/UserSignUp/UserSignUp";
import UserSignIn from "./components/UserSignIn/UserSignIn";
import SellerSignUp from "./components/SellerSignUp/SellerSignUp";
import SellerSignIn from "./components/SellerSignIn/SellerSignIn";
import Orders from "./components/SellerDashboard/Orders";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Dashboard from "./components/Verification/Dashboard/Dashboard";
import VerificationLogin from "./components/Verification/VerificationLogin";
import SellerMenu from "./components/SellerMenu/SellerMenu";
import SellerFirst from "./components/SellerFirst/SellerFirst";
import SellerDashBoard from "./components/SellerDashboard/SellerDashBoard";
import SellerEditProfile from "./components/SellerEditProfile/SellerEditProfile";
import CartState from "./context/CartState.js";
import { ToastContainer } from "react-toastify";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <div className="App">
      <CartState>
        <BrowserRouter>
          <Routes>
            {/* CONSUMER ROUTES */}
            <Route exact path="/" element={<UserSignIn />} />
            <Route exact path="/UserSignUp" element={<UserSignUp />} />

            <Route
              exact
              path="/Home"
              element={[
                <>
                  <Home />
                </>,
              ]}
            />
            <Route
              exact
              path="/cart"
              element={[
                <>
                  <SellerMenu />
                </>,
              ]}
            />
            <Route exact path="/sellerMenu" element={<SellerMenu />} />
            <Route exact path="/checkout" element={<Checkout />} />
            {/* CONSUMER ROUTES END */}

            {/* SELLER ROUTES */}
            <Route exact path="/SellerSignUp" element={<SellerSignUp />} />
            <Route exact path="/SellerSignIn" element={<SellerSignIn />} />
            <Route exact path="/SellerSetUp" element={<SellerFirst />} />
            <Route
              exact
              path="/SellerDashboard"
              element={<SellerDashBoard />}
            />
            <Route exact path="/Orders" element={<Orders />} />
            <Route exact path="/Edit" element={<SellerEditProfile />} />
            {/* SELLER ROUTES END */}

            {/* VERIFICATION ROUTES */}
            <Route
              exact
              path="/verificationLogin"
              element={<VerificationLogin />}
            />
            <Route exact path="/verification" element={<Dashboard />} />
            {/* VERIFICATION ROUTES END*/}
          </Routes>
        </BrowserRouter>
      </CartState>
      <ToastContainer />
    </div>
  );
}

export default App;
