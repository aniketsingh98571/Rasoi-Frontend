<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import classes from "./SellerSignUp.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SellerSignUpLogic from "./SellerSignUpLogic";

const SellerSignUp = () => {
  const {
    ConsumerRegistration,
    ConfirmPass,
    ErrorMessage,
    HandleInput,
    HandleFileInput1,
    HandleFileInput2,
    SubmitHandler,
    ConfirmPassword,
  } = SellerSignUpLogic();

  return (
    <div className={classes.Container}>
      <div className={classes.InnerContainer}>
=======
import React from "react"
import { Link } from "react-router-dom"
import classes from './SellerSignUp.module.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SellerSignUpLogic from "./SellerSignUpLogic";

const SellerSignUp=()=>{
    const  {ConsumerRegistration,ConfirmPass,ErrorMessage,HandleInput,
        HandleFileInput1,HandleFileInput2,SubmitHandler,ConfirmPassword} =SellerSignUpLogic();

 
    return(
        <div className={classes.Container}>
        <div className={classes.InnerContainer}>
>>>>>>> aniketnew
        <div className={classes.SignUpText}>
            <p>Sign Up</p>
        </div>
        
        </div>
        <form onSubmit={SubmitHandler} encType='multipart/form-data'>
        <div className={classes.ConsumerForm}>
            <div className={classes.LeftForm}>
            <div className={classes.NameContainer}>
                <div className={classes.NameText}>
                    <p>Name</p>
                </div>
                <div className={classes.NameInput}>
                    <input type="text" name="sellerName" value={ConsumerRegistration.sellerName} onChange={HandleInput}/>
                </div>
            </div>
            <div className={classes.Password}>
<<<<<<< HEAD
              <div className={classes.PasswordText}>
                <p>Password</p>
              </div>
              <div className={classes.PasswordInput}>
                <input
                  type="password"
                  name="password"
                  value={ConsumerRegistration.password}
                  onChange={HandleInput}
                />
                <p id="passId"></p>
              </div>
=======
                    <div className={classes.PasswordText}>
                        <p>Password</p>
                    </div>
                    <div className={classes.PasswordInput}>
                        <input type="password" name="password" value={ConsumerRegistration.password} onChange={HandleInput}/>
                        <p id="passId"></p>
                    </div>
                </div>
           <div className={classes.PanCardContainer}>
               <div className={classes.PanText}>
                  <p>Upload Pan Card</p> 
               </div>
               <div className={classes.PanInput}>
                   <input id="PanImageId" accept=".jpeg,.png,.jpg"   type="file" name="panImage"  onChange={HandleFileInput1}/>
               </div>
           </div>
>>>>>>> aniketnew
            </div>
            <div className={classes.RightForm}>
                <div className={classes.MobileNumber}>
                    <div className={classes.MobileText}>
                        <p>Mobile Number</p>
                    </div>
                    <div className={classes.MobileInput}>
                        <input type="number" name="mobileNo" value={ConsumerRegistration.mobileNo} onChange={HandleInput}/>
                        <p id="mobileId"></p>
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
<<<<<<< HEAD
          </div>
          <div className={classes.RightForm}>
            <div className={classes.MobileNumber}>
              <div className={classes.MobileText}>
                <p>Mobile Number</p>
              </div>
              <div className={classes.MobileInput}>
                <input
                  type="number"
                  name="mobileNo"
                  value={ConsumerRegistration.mobileNo}
                  onChange={HandleInput}
                />
                <p id="mobileId"></p>
              </div>
            </div>
            <div className={classes.ConfirmPassword}>
              <div className={classes.ConfirmPasswordText}>
                <p>Confirm Password</p>
              </div>
              <div className={classes.ConfirmPasswordInput}>
                <input
                  type="password"
                  name="confirmpassword"
                  value={ConfirmPass}
                  onChange={ConfirmPassword}
                />
                <p>{ErrorMessage}</p>
              </div>
=======
            <div className={classes.ProfileContainer}>
                <div className={classes.ProfileText}>
                    <p>Upload Profile Picture</p>
                </div>
                <div className={classes.ProfileInput}>
                    <input id="ProfileImageId" type="file"   accept=".jpeg,.png,.jpg" name="profileImage" onChange={HandleFileInput2}/>
                </div>
>>>>>>> aniketnew
            </div>
            </div>
        </div>
        <div className={classes.SubmitButtonOne}>
        <input type="submit" className={classes.SubmitButton}/>
        </div>
<<<<<<< HEAD
      </form>
      <div className={classes.OuterButtonContainer}>
        <div className={classes.ButtonContainer}>
          {/* <button type="button" onClick={SubmitHandler}>Sign Up</button> */}
        </div>
        <div className={classes.SignInText}>
          <p>
            Already have an account?{" "}
            <Link className={classes.LinkEdit} to="/SellerSignIn">
              <span className={classes.SignText}>Sign in</span>
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
export default SellerSignUp;
=======
        </form>
        <div className={classes.OuterButtonContainer}>
            <div className={classes.ButtonContainer}>
               
            </div>
            <div className={classes.SignInText}>
                <p>Already have an account? <Link className={classes.LinkEdit} to="/SellerSignIn"><span className={classes.SignText} >Sign in</span></Link></p>
            </div>
        </div>
        <ToastContainer />
        </div>

    )
    }
export default SellerSignUp;
>>>>>>> aniketnew
