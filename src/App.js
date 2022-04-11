import React from "react";
import "./App.css";
import UserSignUp from "./components/UserSignUp/UserSignUp";
import UserSignIn from "./components/UserSignIn/UserSignIn";
import SellerSignUp from "./components/SellerSignUp/SellerSignUp";
import SellerSignIn from "./components/SellerSignIn/SellerSignIn";
import SellerHeader from "./components/SellerHeader/SellerHeader";
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
import EditModal from "./components/SellerEditProfile/EditModal";
import UserDashboard from "./components/UserDashboard/UserDashboard";

function App() {
  return (
    <div className="App">
      <CartState>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<UserSignIn />} />
            <Route exact path="/UserSignUp" element={<UserSignUp />} />
            <Route exact path="/SellerSignUp" element={<SellerSignUp />} />
            <Route exact path="/SellerSignIn" element={<SellerSignIn />} />

            <Route
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
            <Route exact path="/seller" element={<SellerHeader />} />
            <Route
              exact
              path="/verificationLogin"
              element={<VerificationLogin />}
            />
            <Route exact path="/verification" element={<Dashboard />} />
            <Route exact path="/sellerMenu" element={<SellerMenu />} />

            <Route exact path="/" element={<UserSignIn />} />
            <Route exact path="/UserSignUp" element={<UserSignUp />} />
            <Route exact path="/SellerSignUp" element={<SellerSignUp />} />
            <Route exact path="/SellerSignIn" element={<SellerSignIn />} />
            <Route exact path="/EditModal" element={<EditModal/>}/>
            <Route exact path="/seller" element={<SellerHeader />} />
            <Route exact path="/SellerSetUp" element={<SellerFirst />} />
            <Route
              exact
              path="/SellerDashboard"
              element={<SellerDashBoard />}
            />
            <Route exact path="/Orders" element={<Orders />} />
            <Route exact path="/Edit" element={<SellerEditProfile />} />
           <Route exact path="/ConsumerProfile" element={<UserDashboard/>}/>
          
          </Routes>
        </BrowserRouter>
      </CartState>
      <ToastContainer />
    </div>
  );
}

export default App;
