<<<<<<< HEAD
import React from "react";

import classes from "./SellerSignIn.module.css";
import ToggleButton from "../ToggleButton/ToggleButton";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import SellerSignInLogic from "./SellerSignInLogic";
const SellerSignIn = () => {
  const { Sellerlog, HandleInput, SubmitHandler } = SellerSignInLogic();
  return (
    <div className={classes.Container}>
      <div className={classes.LoginText}>
        <p>Login</p>
      </div>
      <div className={classes.ToggleContainer}>
        <ToggleButton ActiveClasses="Yes" SellerRouter="/" />
      </div>
      <div className={classes.LogInForm}>
        <div className={classes.MobileContainer}>
          <div className={classes.MobileNumberText}>
            <p>Mobile Number</p>
          </div>
          <div className={classes.MobileInput}>
            <input
              type="number"
              name="mobileNo"
              value={Sellerlog.mobileNo}
              onChange={HandleInput}
            />
          </div>
        </div>
        <div className={classes.PasswordContainer}>
          <div className={classes.PasswordText}>
            <p>Password</p>
          </div>
          <div className={classes.PasswordInput}>
            <input
              type="password"
              name="password"
              value={Sellerlog.password}
              onChange={HandleInput}
            />
          </div>
        </div>
      </div>
      <div className={classes.ButtonContainer}>
        <div className={classes.ButtonContainer1}>
          <button type="button" onClick={SubmitHandler}>
            Login
          </button>
        </div>
        <div className={classes.ButtonText}>
          <p>
            Don't Have an Account?{" "}
            <Link className={classes.LinkEdit} to="/SellerSignUp">
              {" "}
              <span className={classes.SpanText}>Sign Up</span>
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
=======
import React from "react"

import classes from './SellerSignIn.module.css'
import ToggleButton from "../ToggleButton/ToggleButton"
import { ToastContainer } from 'react-toastify';
import { Link } from "react-router-dom"
import SellerSignInLogic from "./SellerSignInLogic";
const SellerSignIn=()=>{
   const {Sellerlog,HandleInput,SubmitHandler} = SellerSignInLogic();
    return(
        <div className={classes.Container}>
           
            <div className={classes.LoginText}>
                <p>Login</p>
            
            </div>
            <div className={classes.ToggleContainer}>
            <ToggleButton ActiveClasses="Yes" SellerRouter="/"/>
                 </div>
            <div className={classes.LogInForm}>
                <div className={classes.MobileContainer}>
                    <div className={classes.MobileNumberText}>
                        <p>Mobile Number</p>
                    </div>
                    <div className={classes.MobileInput}>
                        <input type="number" name="mobileNo" value={Sellerlog.mobileNo} onChange={HandleInput}/>
                    </div>
                </div>
                <div className={classes.PasswordContainer}>
                    <div className={classes.PasswordText}>
                        <p>Password</p>
                    </div>
                    <div className={classes.PasswordInput}>
                        <input type="password" name="password" value={Sellerlog.password} onChange={HandleInput}/>
                    </div>
                </div>
            </div>
            <div className={classes.ButtonContainer}>
                <div className={classes.ButtonContainer1}>
                    <button type="button" onClick={SubmitHandler}>Login</button>
                </div>
                <div className={classes.ButtonText}>
                  <p>Don't Have an Account? <Link className={classes.LinkEdit} to="/SellerSignUp"> <span className={classes.SpanText} >Sign Up</span></Link></p>
                  </div>
            </div>
            <ToastContainer />
        </div>
       
>>>>>>> aniketnew
  );
};
export default SellerSignIn;
