import React from "react";
import "./App.css";
import UserSignUp from "./components/UserSignUp/UserSignUp";
import UserSignIn from "./components/UserSignIn/UserSignIn";
import SellerSignUp from "./components/SellerSignUp/SellerSignUp";
import SellerSignIn from "./components/SellerSignIn/SellerSignIn";
import ConsumerHeader from "./components/ConsumerHeader/ConsumerHeader";
import SellerHeader from "./components/SellerHeader/SellerHeader";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import Orders from "./components/SellerDashboard/Orders";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Dashboard from "./components/Verification/Dashboard/Dashboard";
import VerificationLogin from "./components/Verification/VerificationLogin";


import SellerFirst from "./components/SellerFirst/SellerFirst";
import SellerDashBoard from "./components/SellerDashboard/SellerDashBoard";
import SellerEditProfile from "./components/SellerEditProfile/SellerEditProfile";
function App() {
  return (
    <div className="App">
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
                <ConsumerHeader /> <Home /> <Footer />{" "}
              </>,
            ]}
          />
          <Route
            exact
            path="/cart"
            element={[
              <>
                <ConsumerHeader />
                <Cart />
                <Footer />
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
          
        
        <Route exact path="/" element={<UserSignIn/>}/>
        <Route exact path="/UserSignUp" element={<UserSignUp/>}/>
        <Route exact path="/SellerSignUp" element={<SellerSignUp/>}/>
        <Route exact path="/SellerSignIn" element={<SellerSignIn/>}/>
        <Route path="/Home" element={[<><ConsumerHeader/> <Home /> <Footer/> </>]} />
        <Route exact path="/cart" element={[<><ConsumerHeader/><Cart /><Footer/></>]} />
        <Route exact path="/seller" element={<SellerHeader />} />
        <Route exact path="/SellerSetUp" element={<SellerFirst/>}/>
        <Route exact path="/SellerDashboard" element={<SellerDashBoard/>}/>
        <Route exact path="/Orders" element={<Orders/>}/>
        <Route exact path="/Edit" element={<SellerEditProfile/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
