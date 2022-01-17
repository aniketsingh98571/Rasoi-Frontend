import React,{useState} from "react"
import classes from './SellerSignIn.module.css'
import ToggleButton from "../ToggleButton/ToggleButton"
import { Link } from "react-router-dom"
const SellerSignIn=()=>{
    const [Sellerlog,SetSellerlog]=useState({
        Mobile:"",
        Password:""
    })
    const HandleInput=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        SetSellerlog({...Sellerlog,[name]:value})
       
    }
    const SubmitHandler=(e)=>{
        e.preventDefault();
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
        
        SetSellerlog({Mobile:"",Password:""})
        console.log(Sellerlog)
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
                        <input type="number" name="Mobile" value={Sellerlog.Mobile} onChange={HandleInput}/>
                    </div>
                </div>
                <div className={classes.PasswordContainer}>
                    <div className={classes.PasswordText}>
                        <p>Password</p>
                    </div>
                    <div className={classes.PasswordInput}>
                        <input type="password" name="Password" value={Sellerlog.Password} onChange={HandleInput}/>
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