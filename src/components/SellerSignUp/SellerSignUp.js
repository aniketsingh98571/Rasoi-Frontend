import React,{useState} from "react"
import { Link } from "react-router-dom"
import classes from './SellerSignUp.module.css'

const SellerSignUp=()=>{

    const [ConsumerRegistration,SetConsumerRegistration]=useState({
        name:"",
        mobileNo:"",
        password:""
    })
    const [FileUpload1,SetFileUpload1]=useState();
    const [FileUpload2,SetFileUpload2]=useState();
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
const HandleFileInput1=(e)=>{
  SetFileUpload1(e.target.files[0])

}
const HandleFileInput2=(e)=>{
    SetFileUpload2(e.target.files[0])
}
    const SubmitHandler=(e)=>{
        e.preventDefault();
        
        if(ConsumerRegistration.mobileNo&&ConsumerRegistration.name&&ConsumerRegistration.password) console.log("hi")
        else alert("Please fill all details")
        if(ConsumerRegistration.password!==ConfirmPass){
            SetMessage("Password do not Match") 
            SetConfirmPass("")
          
        }
        else{
            SetConsumerRegistration({name:"",address:"",mobileNo:"",password:""})
            SetConfirmPass("")
        }

        setTimeout(()=>SetMessage(""),500)  
        const form=new FormData();
        form.append('User Details',ConsumerRegistration)
        form.append('Pan Card',FileUpload1)
        form.append('Profile Picture',FileUpload2)
        
        
        fetch('http://localhost:8080/consumer/signup', {
        method: 'POST', // or 'PUT'
        mode: 'cors',
        headers: {
           'Content-Type': 'multipart/form-data',
                 },
       body: JSON.stringify(form),
           })
     .then(response =>{ response.json() //status 403=user already exists.
  
     })
     .then(data => {
         
      console.log('Success:', data);
      console.log(data.message+"aniket")
      
     })
      .catch((error) => {
      console.error('Error:', error);
      
     });
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
            <div className={classes.Password}>
                    <div className={classes.PasswordText}>
                        <p>Password</p>
                    </div>
                    <div className={classes.PasswordInput}>
                        <input type="password" name="password" value={ConsumerRegistration.password} onChange={HandleInput}/>
                    </div>
                </div>
           <div className={classes.PanCardContainer}>
               <div className={classes.PanText}>
                  <p>Upload Pan Card</p> 
               </div>
               <div className={classes.PanInput}>
                   <input id={1} accept=".jpeg,.png"  type="file" name="Pan"  onChange={HandleFileInput1}/>
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
            <div className={classes.ProfileContainer}>
                <div className={classes.ProfileText}>
                    <p>Upload Profile Picture</p>
                </div>
                <div className={classes.ProfileInput}>
                    <input id={2} type="file"  accept=".jpeg,.png" name="Profile" onChange={HandleFileInput2}/>
                </div>
            </div>
            </div>
        </div>
        <div className={classes.OuterButtonContainer}>
            <div className={classes.ButtonContainer}>
                <button type="button" onClick={SubmitHandler}>Sign Up</button>
            </div>
            <div className={classes.SignInText}>
                <p>Already have an account? <Link className={classes.LinkEdit} to="/SellerSignIn"><span className={classes.SignText} >Sign in</span></Link></p>
            </div>
        </div>
        </div>

    )
}
export default SellerSignUp;