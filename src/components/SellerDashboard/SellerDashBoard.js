import React, { useState } from 'react'
import classes from './SellerDashBoard.module.css'
import SellerHeader from '../SellerHeader/SellerHeader'
const SellerDashBoard=()=>{
    const [Speciality,SetSpeciality]=useState([{
        name:"Paneer Masala",
        Type:"Veg",
        pic:"https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
        Time:"240",
        Price:150
    },
    {
        name:"Paneer Masala",
        Type:"Veg",
        pic:"https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
        Time:"240",
        Price:150
    },
    {
        name:"Paneer Masala",
        Type:"Veg",
        pic:"https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
        Time:"240",
        Price:150
    },
    {
        name:"Paneer Masala",
        Type:"Veg",
        pic:"https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
        Time:"240",
        Price:150
    }

])
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
                        <i className="fas fa-address-card"></i>
                        <p>Aniket Rajesh Singh</p>
                        </div>
                        <div className={classes.AddressContainer}>
                        <i className="fas fa-map-marker-alt"></i>
                        <p>Siddhatek, 422009</p>
                        </div>
                        <div className={classes.MobileContainer}>
                        <i className="fas fa-mobile-alt"></i>
                        <p>8600469998</p>
                        </div>
                    </div>
                    <div className={classes.SocialContainer}>
                        <div className={classes.Iclass}>
                 <a href="/">  <i className="fab fa-facebook"></i></a> 
                  <a href="/">  <i className="fab fa-instagram"></i></a>
                  </div>
                  <div className={classes.EditButtonContainer}>
                      <button type="button">Edit Profile</button>
                  </div>
                    </div>
                </div>
            </div>
            <div className={classes.BioContainer}>
                <div className={classes.BioHeader}>
                    <p>BIO</p>
                </div>
                <div className={classes.BioContent}>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
                        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the 
                        release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
                        software like Aldus PageMaker including versions of Lorem Ipsum
                        </p>
                </div>
            </div>
            <div className={classes.SpecialityContainer}>
                <div className={classes.SpecialityHeader}>
                    <p>SPECIALITY</p>
                </div>
                <div className={classes.SpecialDishes}>
                {   
                Speciality.map((ele)=>{
                    return  <div className={classes.SpecialCard}>
                    <div className={classes.SpecialImage}>
                        <img src={ele.pic} />
                    </div>
                    <div className={classes.SpecialText}>
                        <p>{ele.name}</p>
                        <p>{ele.Type}</p>
                    </div>
                    <div className={classes.SpecialTimeContainer}>
                        <p>{ele.Time} minutes</p>
                    </div>
                    <div className={classes.SpecialPriceContainer}>
                        <p>Rs {ele.Price}</p>
                    </div>
                </div>
            
                })
            }
            </div>
            </div>
            <div className={classes.SpecialityContainer}>
                <div className={classes.SpecialityHeader}>
                    <p>MENU ITEMS</p>
                </div>
                <div className={classes.SpecialDishes}>
                {   
                Speciality.map((ele)=>{
                    return  <div className={classes.SpecialCard}>
                    <div className={classes.SpecialImage}>
                        <img src={ele.pic} />
                    </div>
                    <div className={classes.SpecialText}>
                        <p>{ele.name}</p>
                        <p>{ele.Type}</p>
                    </div>
                    <div className={classes.SpecialTimeContainer}>
                        <p>{ele.Time} minutes</p>
                    </div>
                    <div className={classes.SpecialPriceContainer}>
                        <p>Rs {ele.Price}</p>
                    </div>
                </div>
            
                })
            }
            </div>
            </div>
            
        </div>
    )
}
export default SellerDashBoard;