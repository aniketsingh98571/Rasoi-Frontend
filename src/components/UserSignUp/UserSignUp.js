import React from "react"
import classes from './UserSignUp.module.css'
const UserSignUp=()=>{
    return(
        <div className={classes.Container}>
            <div className={classes.InnerContainer}>
            <div className={classes.SignUpText}>
                <p>Sign Up</p>
            </div>
            <div className={classes.ConsumerForm}>
                <div className={classes.LeftForm}>
                <div className={classes.NameContainer}>
                    <div className={classes.NameText}>
                        <p>Name</p>
                    </div>
                    <div className={classes.NameInput}>
                        <input type="text"/>
                    </div>
                </div>
                <div className={classes.AddressContainer}>
                    <div className={classes.AddressText}>
                        <p>Full Address</p>
                    </div>
                    <div className={classes.AddressInput}>
                        <input type="text"/>
                    </div>
                </div>
                <div className={classes.ConfirmPassword}>
                    <div className={classes.ConfirmPasswordText}>
                        <p>Confirm Password</p>
                    </div>
                    <div className={classes.ConfirmPasswordInput}>
                        <input type="text"/>
                    </div>
                </div>
                </div>
                <div className={classes.RightForm}>
                    <div className={classes.MobileNumber}>
                        <div className={classes.MobileText}>
                            <p>Mobile Number</p>
                        </div>
                        <div className={classes.MobileInput}>
                            <input type="number"/>
                        </div>
                    </div>
                    <div className={classes.Password}>
                        <div className={classes.PasswordText}>
                            <p>Password</p>
                        </div>
                        <div className={classes.PasswordInput}>
                            <input type="text"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.OuterButtonContainer}>
                <div className={classes.ButtonContainer}>
                    <button type="button">Sign Up</button>
                </div>
                <div className={classes.SignInText}>
                    <p>Already have an account? <span className={classes.SignText}>Sign in</span></p>
                </div>
            </div>
            </div>
        </div>
    )
}
export default UserSignUp;