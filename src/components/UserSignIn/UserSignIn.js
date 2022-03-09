<<<<<<< HEAD
import React, { useState } from "react";
import classes from "./UserSignIn.module.css";
import ToggleButton from "../ToggleButton/ToggleButton";
import { Link } from "react-router-dom";
const UserSignIn = () => {
  const [Consumerlog, SetConsumerlog] = useState({
    Mobile: "",
    Password: "",
  });
  const HandleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    SetConsumerlog({ ...Consumerlog, [name]: value });
  };
  const SubmitHandler = (e) => {
    e.preventDefault();
    if (Consumerlog.Mobile && Consumerlog.Password) {
      //     fetch('http://localhost:8080/consumer/signup', {
      //     method: 'POST', // or 'PUT'
      //     mode: 'cors',
      //     headers: {
      //        'Content-Type': 'application/json',
      //              },
      //    body: JSON.stringify(ConsumerRegistration),
      //        })
      //  .then(response =>{ response.json() //status 403=user already exists.
      //     if(response.status===403)console.log("User already exists")
      //  })
      //  .then(data => {

      //   console.log('Success:', data);
      //   console.log(data.message+"aniket")

      //  })
      //   .catch((error) => {
      //   console.error('Error:', error);

      //  });
      SetConsumerlog({ Mobile: "", Password: "" });
    } else alert("Please fill out all fields");
  };
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
              name="Mobile"
              value={Consumerlog.Mobile}
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
              name="Password"
              value={Consumerlog.Password}
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
>>>>>>> aniket
        </div>
      </div>
    </div>
  );
};
export default UserSignIn;
