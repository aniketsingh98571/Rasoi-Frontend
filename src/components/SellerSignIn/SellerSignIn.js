import React,{useState} from "react"
import axios from "axios"
import classes from './SellerSignIn.module.css'
import ToggleButton from "../ToggleButton/ToggleButton"
import { Link } from "react-router-dom"
const SellerSignIn=()=>{
    const [Sellerlog,SetSellerlog]=useState({
        mobileNo:"",
        password:""
    })
    const HandleInput=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        SetSellerlog({...Sellerlog,[name]:value})
       
    }
    const SubmitHandler=(e)=>{
        e.preventDefault();
        if(Sellerlog.mobileNo&&Sellerlog.password){
            axios.post(   'http://localhost:8080/seller/signin', Sellerlog)
            .then(res => {
               console.log(res.data.sellerID); //getting user id of authenticated seller
               localStorage.setItem('SellerId',res.data.sellerID)
               SetSellerlog({mobileNo:"",password:""})
       
            })
            .catch(err => {
                console.log(err)
            });
          
   
        }
        else
        alert("Please fill all the details")
    
        
        
        
    }
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
        </div>
    )
}
export default SellerSignIn;