import React from "react"
import classes from './ToggleButton.module.css'
const ToggleButton=(props)=>{
    return(
        <div className={classes.Container}>
        <div className={classes.ToggleText}>
                    <p>Are you a Seller?</p>
                </div>
                <div className={classes.ToggleButtonContainer}>
                    <div className={classes.ToggleButtonOne}>
                        <button type="button" onClick={()=>{props.SellerRoute===undefined?window.location.href="/":window.location.href=props.SellerRoute}} className={props.ActiveClasses==="Yes"?classes.ActiveClass:""}>YES</button>
                       
                    </div>
                    <div className={classes.ToggleButtonTwo}>
                        <button type="button" className={props.ActiveClasses==="No"?classes.ActiveClass:""} onClick={()=>{props.SellerRouter===undefined?window.location.href="/":window.location.href=props.SellerRouter}}>NO</button>
                    </div>
                    </div>
                    </div>
    )
}
export default ToggleButton;