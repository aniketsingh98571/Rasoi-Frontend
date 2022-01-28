import React,{useState} from "react"
import axios from "axios"
import classes from './SellerSignIn.module.css'
import ToggleButton from "../ToggleButton/ToggleButton"
import { ToastContainer, toast } from 'react-toastify';
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
               
                if(res.status===200&&res.data.configured===false){
                    toast.success('Login Successful', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                        console.log(res)
               localStorage.setItem('SellerId',res.data.seller_ID)
               SetSellerlog({mobileNo:"",password:""})
               
              setTimeout(() => {
                window.location.href="/SellerSetUp"
              }, 5000); 
    }
    else if(res.status===200&&res.data.configured===true){
        window.location.href="/SellerSignIn"
    }
               
            })
            .catch(err => {
                if(err.response.status===404){
                    toast.error('Seller does not exist', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                }
                if(err.response.status===401){
                    toast.error('Invalid Credentials', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                }
                if(err.response.status===403){
                    toast.error('Seller is Not Validated', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                }
                if(err.response.status===422){
                    toast.error('Either Mobile Number and Password not entered', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                }
            });
          
   
        }
        else
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
    )
}
export default SellerSignIn;