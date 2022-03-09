import React from "react"
import classes from './SellerEditProfile.module.css'
import SellerHeader from "../SellerHeader/SellerHeader"
const SellerEditProfile=()=>{
    return(
     <div className={classes.Container}>
         <SellerHeader/>
         <div className={classes.InnerContainer}>
         <div className={classes.EditProfileTextContainer}>
             <div className={classes.EditProfileText}>
                 <p>Edit Your Profile</p>
            </div>
            <div className={classes.BackDashboardButton}>
                <button type="button">Back to Dashboard</button>
            </div>
        </div>
        <div className={classes.FirstContainer}>
            <div className={classes.ImageContainer}>
                <img src="https://thumbs.dreamstime.com/z/seller-home-improvement-store-27594965.jpg" alt="Seller Image"/>
            </div>
                <div className={classes.InputContainer}>
                    <div className={classes.InputOne}>
                    <div className={classes.AreaName}>
                        <p>AREA NAME</p>
                        <input type="text" placeholder="Area Name"/>
                        </div>
                        <div className={classes.FaceBookContainer}>
                        <i className="fab fa-facebook"></i>
                        <input type="text" placeholder="Enter Facebook User Name"/>
                            </div>
                            <div className={classes.InstagramContainer}>
                            <i className="fab fa-instagram"></i>
                            <input type="text" placeholder="Enter Instagram User Name "/>
                                </div>
                                </div>
                                <div className={classes.InputTwo}>
                                    <div className={classes.PinCodeContainer}>
                                        <p>PINCODE</p>
                                        <input type="number" placeholder="Your area pincode"/>
                                        </div>
                                        <div className={classes.BioContainer}>
                                            <p>BIO</p>
                                            <textarea/>
                                            </div>
                                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default SellerEditProfile;