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
    
        <div className={classes.ProfilePicContainer}>
                        
                        <div className={classes.ProfileInput}>
                        <label htmlFor="ProfileInputId">
              <div className={classes.LabelContainer}>
              <img src="https://thumbs.dreamstime.com/z/seller-home-improvement-store-27594965.jpg"/>
               <p>Update Image</p>
              </div>
            </label>
            <input
              className={classes.FileInput}
              type="file"
              id="ProfileInputId"
              name="ProfilePic"
           accept=".png,.jpg,.jpeg"
            />
                        </div>
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