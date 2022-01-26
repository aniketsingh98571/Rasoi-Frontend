import React from "react"
import classes from './SellerFirst.module.css'
import logo from '../../assets/images/logo.png'
const SellerFirst=()=>{
    return(
        <div className={classes.OuterContainer}>
            <div className={classes.NavContainer}>
                <div className={classes.LogoContainer}>
                    <img src={logo} alt="Rasoi logo"/>
                </div>
                <div className={classes.WelComeText}>
                    <p><span className={classes.Welcome}> Welcome</span>, Aniket Singh!</p>
                </div>
            </div>
            <div className={classes.ProfileText}>
                <p>Let's Setup Your Profile First!</p>
            </div>
            <div className={classes.FormContainer}>
                <div className={classes.LeftForm}>
                    <div className={classes.ProfilePicContainer}>
                        <div className={classes.ProfileContainerText}>
                            <p>PROFILE PICTURE</p>
                        </div>
                        <div className={classes.ProfileInput}>
                        <label htmlFor="ProfileInputId">
              <div className={classes.LabelContainer}>
               <i class="fas fa-upload"></i>
               <p>Upload Image</p>
              </div>
            </label>
            <input
              className={classes.FileInput}
              type="file"
              id="ProfileInputId"
            />
                        </div>
                    </div>
                    <div className={classes.NameContainer}>
                        <div className={classes.NameText}>
                            <p>NAME*</p>
                        </div>
                        <div className={classes.NameInput}>
                            <input type="text" />
                        </div>
                    </div>
                    <div className={classes.MobileContainer}>
                        <div className={classes.MobileText}>
                            <p>MOBILE*</p>
                        </div>
                        <div className={classes.MobileInput}>
                            <input type="number"/>
                        </div>
                    </div>
                    <div className={classes.BioContainer}>
                        <div className={classes.BioText}>
                            <p>Bio</p>
                        </div>
                        <div className={classes.BioInput}>
                            <textarea/>
                        </div>
                    </div>
                    <div className={classes.SocialContainer}>
                        <div className={classes.SocialText}>
                            <p>Social Media</p>
                        </div>
                        <div className={classes.FaceBookContainer}>
                        <i class="fab fa-facebook"></i>
                        <input type="text" placeholder="Facebook Username"/>
                        </div>
                        <div className={classes.InstagramContainer}>
                        <i class="fab fa-instagram"></i>
                        <input type="text" placeholder="Instagram Username"/>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SellerFirst;