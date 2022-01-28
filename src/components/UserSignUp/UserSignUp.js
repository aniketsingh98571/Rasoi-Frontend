import React, { useState } from "react"
import { Link } from "react-router-dom"
import classes from './UserSignUp.module.css'
import { ToastContainer, toast } from 'react-toastify';

const UserSignUp=()=>{
    const [ConsumerRegistration,SetConsumerRegistration]=useState({
        name:"",
        address:"",
        mobileNo:"",
        password:""
    })
    const [ConfirmPass,SetConfirmPass]=useState("")
    const [ErrorMessage,SetMessage]=useState("")
    const HandleInput=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        SetConsumerRegistration({...ConsumerRegistration,[name]:value})
        
    }
const ConfirmPassword=(e)=>{
    SetConfirmPass(e.target.value)
    
}
    const SubmitHandler=(e)=>{
        e.preventDefault();
     
        if(ConsumerRegistration.address&&ConsumerRegistration.mobileNo&&ConsumerRegistration.name&&ConsumerRegistration.password&&ConfirmPass){ console.log("filled")}
        else{ 
            toast.warn('Please Fill out all fields', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
        
        if(ConsumerRegistration.mobileNo.length!==10){
            document.getElementById("MobileId").innerHTML="Invalid Mobile Length";
            SetConsumerRegistration({name:ConsumerRegistration.name,address:ConsumerRegistration.address,mobileNo:"", password:ConsumerRegistration.password})
        }
            
        
        if(ConsumerRegistration.password.length<5){
            document.getElementById("PswrdId").innerHTML="Password Length too short";
            SetConsumerRegistration({name:ConsumerRegistration.name,address:ConsumerRegistration.address,mobileNo:ConsumerRegistration.mobileNo, password:""})
            
         }
       
         if(ConsumerRegistration.password!==ConfirmPass){
            SetMessage("Password do not Match") 
            SetConfirmPass("")
          
        }
       
        else if(ConsumerRegistration.password===ConfirmPass&&ConsumerRegistration.password.length>5&&ConsumerRegistration.mobileNo.length===10
            &&ConsumerRegistration.address&&ConsumerRegistration.mobileNo&&ConsumerRegistration.name&&ConsumerRegistration.password&&ConfirmPass){
      
                console.log("All okay")
        fetch('http://localhost:8080/consumer/signup', {
        method: 'POST', // or 'PUT'
        mode: 'cors',
        headers: {
           'Content-Type': 'application/json',
                 },
       body: JSON.stringify(ConsumerRegistration),
           })
     .then(response =>{ 
          response.json() //status 403=user already exists.
          SetConsumerRegistration({name:"",address:"",mobileNo:"",password:""})
          SetConfirmPass("")
        if(response.status===403){
            toast.error('User Already Exists', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
                 
        }
        else if(response.status===201){
            toast.success('User Registered, please login with your credentials', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });

     }
       
     })
     .then(data => {
         
    })
      .catch((error) => {
      console.error('Error:', error);
      
     });
    }
    setTimeout(()=>{
        SetMessage("")
        document.getElementById("PswrdId").innerHTML="";
        document.getElementById("MobileId").innerHTML="";
      },2000)  
    }
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