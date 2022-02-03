import React from 'react'
import classes from './SellerDashBoard.module.css'
import SellerHeader from '../SellerHeader/SellerHeader'
const SellerDashBoard=()=>{
    return(
        <div className={classes.OuterContainer}>
            <SellerHeader/>
            
            <div className={classes.ButtonContainer}>
                    <button type="button">Dashboard</button>
                    <button className={classes.SecondButton} type="button">Orders</button>
            </div>
            <div className={classes.InnerContainer}>
                <div className={classes.FirstContainer}>
                    <div className={classes.ImageContainer}>
                        <img src="https://thumbs.dreamstime.com/z/seller-home-improvement-store-27594965.jpg" alt="Seller Image" />
                    </div>
                    <div className={classes.TextContainer}>
                        <div className={classes.NameContainer}>
                        <i class="fas fa-address-card"></i>
                        <p>Aniket Rajesh Singh</p>
                        </div>
                        <div className={classes.AddressContainer}>
                        <i class="fas fa-map-marker-alt"></i>
                        <p>Siddhatek, 422009</p>
                        </div>
                        <div className={classes.MobileContainer}>
                        <i class="fas fa-mobile-alt"></i>
                        <p>8600469998</p>
                        </div>
                    </div>
                    <div className={classes.SocialContainer}>
                 <a href="/">  <i class="fab fa-facebook"></i></a> 
                  <a href="/">  <i class="fab fa-instagram"></i></a>
                  <div className={classes.EditButtonContainer}>
                      <button type="button">Edit Profile</button>
                  </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}
export default SellerDashBoard;