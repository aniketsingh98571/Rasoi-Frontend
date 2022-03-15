<<<<<<< HEAD
import React from "react";
import classes from "./UserSignIn.module.css";
import ToggleButton from "../ToggleButton/ToggleButton";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import UserSignInLogic from "./UserSignInLogic";
const UserSignIn = () => {
  const { Consumerlog, HandleInput, SubmitHandler } = UserSignInLogic();
  return (
    <div className={classes.Container}>
      <div className={classes.LoginText}>
        <p>Login</p>
      </div>
      <div className={classes.ToggleContainer}>
        <ToggleButton ActiveClasses="No" SellerRoute="/SellerSignIn" />
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
              value={Consumerlog.mobileNo}
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
              value={Consumerlog.password}
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
            <Link className={classes.LinkEdit} to="/UserSignUp">
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
import classes from './UserSignIn.module.css'
import ToggleButton from "../ToggleButton/ToggleButton"
import { Link } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import UserSignInLogic from "./UserSignInLogic"
const UserSignIn=()=>{
   const {Consumerlog,HandleInput,SubmitHandler} = UserSignInLogic()
    return(
        <div className={classes.Container}>
            <div className={classes.LoginText}>
                <p>Login</p>
            
            </div>
            <div className={classes.ToggleContainer}>
            <ToggleButton ActiveClasses="No" SellerRoute="/SellerSignIn"/>
                 </div>
            <div className={classes.LogInForm}>
                <div className={classes.MobileContainer}>
                    <div className={classes.MobileNumberText}>
                        <p>Mobile Number</p>
                    </div>
                    <div className={classes.MobileInput}>
                        <input type="number" name="mobileNo" value={Consumerlog.mobileNo} onChange={HandleInput}/>
                    </div>
                </div>
                <div className={classes.PasswordContainer}>
                    <div className={classes.PasswordText}>
                        <p>Password</p>
                    </div>
                    <div className={classes.PasswordInput}>
                        <input type="password" name="password" value={Consumerlog.password} onChange={HandleInput}/>
                    </div>
                </div>
            </div>
            <div className={classes.ButtonContainer}>
                <div className={classes.ButtonContainer1}>
                    <button type="button" onClick={SubmitHandler}>Login</button>
                </div>
                <div className={classes.ButtonText}>
                  <p>Don't Have an Account? <Link className={classes.LinkEdit} to="/UserSignUp"> <span className={classes.SpanText} >Sign Up</span></Link></p>
                  </div>
            </div>
            <ToastContainer/>
        </div>
      
>>>>>>> aniketnew
  );
};
export default UserSignIn;
