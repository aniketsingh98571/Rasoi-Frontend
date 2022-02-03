import React from "react"
import { Link } from "react-router-dom"
import classes from './UserSignUp.module.css'
import { ToastContainer } from 'react-toastify';
import UserSignUpLogic from "./UserSignUpLogic";
const UserSignUp=()=>{
    const {ConsumerRegistration,HandleInput,ConfirmPass,ConfirmPassword,ErrorMessage,SubmitHandler} =UserSignUpLogic()
    return(
        <div className={classes.Container}>
            <div className={classes.InnerContainer}>
            <div className={classes.SignUpText}>
                <p>Sign Up</p>
            </div>
           
            </div>
            <div className={classes.ConsumerForm}>
                <div className={classes.LeftForm}>
                <div className={classes.NameContainer}>
                    <div className={classes.NameText}>
                        <p>Name</p>
                    </div>
                    <div className={classes.NameInput}>
                        <input type="text" name="name" value={ConsumerRegistration.name} onChange={HandleInput}/>
                    </div>
                </div>
                <div className={classes.AddressContainer}>
                    <div className={classes.AddressText}>
                        <p>Full Address</p>
                    </div>
                    <div className={classes.AddressInput}>
                        <input type="text" name="address" value={ConsumerRegistration.address} onChange={HandleInput}/>
                    </div>
                </div>
                <div className={classes.ConfirmPassword}>
                    <div className={classes.ConfirmPasswordText}>
                        <p>Confirm Password</p>
                    </div>
                    <div className={classes.ConfirmPasswordInput}>
                        <input type="password" name="confirmpassword" value={ConfirmPass}  onChange={ConfirmPassword}/>
                        <p>{ErrorMessage}</p>
                    </div>
                </div>
                </div>
                <div className={classes.RightForm}>
                    <div className={classes.MobileNumber}>
                        <div className={classes.MobileText}>
                            <p>Mobile Number</p>
                        </div>
                        <div className={classes.MobileInput}>
                            <input type="number" name="mobileNo" value={ConsumerRegistration.mobileNo} onChange={HandleInput}/>
                            <p id="MobileId"></p>
                        </div>
                    </div>
                    <div className={classes.Password}>
                        <div className={classes.PasswordText}>
                            <p>Password</p>
                        </div>
                        <div className={classes.PasswordInput}>
                            <input type="password" name="password" value={ConsumerRegistration.password} onChange={HandleInput}/>
                            <p id="PswrdId"></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.OuterButtonContainer}>
                <div className={classes.ButtonContainer}>
                    <button type="button" onClick={SubmitHandler}>Sign Up</button>
                </div>
                <div className={classes.SignInText}>
                    <p>Already have an account? <Link className={classes.LinkEdit} to="/"><span className={classes.SignText} >Sign in</span></Link></p>
                </div>
            </div>
            <ToastContainer />
            </div>
    
    )
}
export default UserSignUp;