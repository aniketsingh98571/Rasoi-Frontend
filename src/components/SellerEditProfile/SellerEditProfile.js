import React, { useState } from "react"
import classes from './SellerEditProfile.module.css'
import SellerHeader from "../SellerHeader/SellerHeader"
const SellerEditProfile=()=>{
    const [url,seturl]=useState("https://thumbs.dreamstime.com/z/seller-home-improvement-store-27594965.jpg")
    const [Edit,SetEdit]=useState({
        image:"https://thumbs.dreamstime.com/z/seller-home-improvement-store-27594965.jpg",
        areaName:"Siddhatek Nagar",
        facebook:"aniket98571",
        instagram:"aniket98571",
        bio:"Hi I am Aniket",
        speciality:[
            {
                id:"gg1",
                image:"https://www.tasteofhome.com/wp-content/uploads/2021/01/tasty-butter-chicken-curry-dish-from-indian-cuisine-1277362334.jpg?fit=700,700",
                foodName:"Paneer Masala",
                type:"Veg",
                time:240,
                price:250
            },
            {
                id:"gg2",
                image:"https://www.tasteofhome.com/wp-content/uploads/2021/01/tasty-butter-chicken-curry-dish-from-indian-cuisine-1277362334.jpg?fit=700,700",
                foodName:"Paneer Masala",
                type:"Veg",
                time:240,
                price:250
            },
            {
                id:"gg3",
                image:"https://www.tasteofhome.com/wp-content/uploads/2021/01/tasty-butter-chicken-curry-dish-from-indian-cuisine-1277362334.jpg?fit=700,700",
                foodName:"Chicken Lahori",
                type:"Non-Veg",
                time:240,
                price:250
            }
        ],
        general:[
            {
                id:"gg4",
                image:"https://www.tasteofhome.com/wp-content/uploads/2021/01/tasty-butter-chicken-curry-dish-from-indian-cuisine-1277362334.jpg?fit=700,700",
                foodName:"Paneer Masala",
                type:"Veg",
                time:240,
                price:250
            },
            {
                id:"gg5",
                image:"https://www.tasteofhome.com/wp-content/uploads/2021/01/tasty-butter-chicken-curry-dish-from-indian-cuisine-1277362334.jpg?fit=700,700",
                foodName:"Paneer Pasanda",
                type:"Veg",
                time:240,
                price:250
            },
            {
                id:"gg6",
                image:"https://www.tasteofhome.com/wp-content/uploads/2021/01/tasty-butter-chicken-curry-dish-from-indian-cuisine-1277362334.jpg?fit=700,700",
                foodName:"Chicken Lahori",
                type:"Non-Veg",
                time:240,
                price:250
            }
        ]
    })
    const ImageHandler=(e)=>{
        const file=e.target.files[0]
        const url=URL.createObjectURL(file)
        seturl(url)
        SetEdit({...Edit,image:file})
        // const reader = new FileReader();
        // const url=reader.readAsDataURL(file)
        //  reader.onloadend=function(e){
        //   SetEdit({...Edit,image:reader.result})
        //  }
     
    }
    const FirstSubmitHandler=(e)=>{
        e.preventDefault();
        console.log("submitted")
    }
    return(
     <div className={classes.Container}>
         <SellerHeader/>
         <div className={classes.InnerContainer}>
             <form onSubmit={FirstSubmitHandler} encType='multipart/form-data'>
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
              <img src={url}/>
               <p>Update Image</p>
              </div>
            </label>
            <input
              className={classes.FileInput}
              type="file"
              id="ProfileInputId"
              name="ProfilePic"
           accept=".png,.jpg,.jpeg"
           onChange={ImageHandler}
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
                                    <div className={classes.PinCodeContainerFirst}>
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
            <div className={classes.SaveButtonContainer}>
                    <input type="submit" value="SAVE CHANGES"/>
                </div>
                </form>
                <div className={classes.SecondInnerContainer}>
                    <div className={classes.SpecialityHeader}>
                        <p>Speciality</p>
                    </div>
                    <div className={classes.SpecialityCardContainer}>
                    {  
                    Edit.speciality.map((ele)=>{
                            return (
                                <div key={ele.id} className={classes.InnerSpecialContainer}>
                            <div className={classes.SpecialImageContainer}>
                                <img src={ele.image}/>
                            </div>
                            <div className={classes.LeftContainer}>
                                <div className={classes.FoodNameContainer}>
                                    <p>{ele.foodName}</p>
                                </div>
                                <div className={classes.DishType}>
                                    <p>{ele.type}</p>
                                </div>
                                <div className={classes.TimeContainer}>
                                    <p>{ele.time} mins</p>
                                </div>
                            </div>
                            <div className={classes.PriceContainer}>
                                <p> {ele.price} Rs</p>
                            </div>
                            <div className={classes.ButtonContainer}>
                                <div className={classes.EditButtonContainer}>
                                    <button type="button">Edit</button>
                                </div>
                                <div className={classes.DeleteButtonContainer}>
                                    <button type="button">Delete</button>
                                </div>
                            </div>
                        </div>
                            )
                    })  
}
                    </div>
                </div>
        </div>
    </div>
    )
}
export default SellerEditProfile;