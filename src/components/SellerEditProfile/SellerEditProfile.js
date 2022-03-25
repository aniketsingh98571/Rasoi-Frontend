import React, { useState } from "react"
import classes from './SellerEditProfile.module.css'
import SellerHeader from "../SellerHeader/SellerHeader"
import EditModal from "./EditModal"
const SellerEditProfile=()=>{
    const [url,seturl]=useState("https://thumbs.dreamstime.com/z/seller-home-improvement-store-27594965.jpg")
    const [modal,setmodal]=useState(false)
    const [dish,setdish]=useState({})
    const [firstForm,SetFirstForm]=useState({
        ProfilePic:null,
        AreaName:"",
        Facebook:"",
        Instagram:"",
        Pincode:"",
        Bio:""
    })
    const [Edit,SetEdit]=useState({
        image:"https://thumbs.dreamstime.com/z/seller-home-improvement-store-27594965.jpg",
        areaName:"Siddhatek Nagar",
        facebook:"aniket98571",
        instagram:"aniket98571",
        bio:"Hi I am Aniket",
        speciality:[
            {
                id:"gg1",
                dishName:"Paneer Masala",
                price:240,
                dishType:"Veg",
                isSpecial:true,
                timeReq:240,
                Picture:"https://www.tasteofhome.com/wp-content/uploads/2021/01/tasty-butter-chicken-curry-dish-from-indian-cuisine-1277362334.jpg?fit=700,700"
            },
            {
                id:"gg2",
                dishName:"Paneer Masala",
                price:240,
                dishType:"Veg",
                isSpecial:true,
                timeReq:240,
                Picture:"https://www.tasteofhome.com/wp-content/uploads/2021/01/tasty-butter-chicken-curry-dish-from-indian-cuisine-1277362334.jpg?fit=700,700"
            },
            {
                id:"gg3",
                dishName:"Paneer Masala",
                price:240,
                dishType:"Veg",
                isSpecial:true,
                timeReq:240,
                Picture:"https://www.tasteofhome.com/wp-content/uploads/2021/01/tasty-butter-chicken-curry-dish-from-indian-cuisine-1277362334.jpg?fit=700,700"
            }
        ],
        general:[
            {
                id:"gg4",
                dishName:"Paneer Masala",
                price:240,
                dishType:"Veg",
                isSpecial:false,
                timeReq:240,
                Picture:"https://www.tasteofhome.com/wp-content/uploads/2021/01/tasty-butter-chicken-curry-dish-from-indian-cuisine-1277362334.jpg?fit=700,700"
            },
            {
                id:"gg5",
                dishName:"Paneer Masala",
                price:240,
                dishType:"Veg",
                isSpecial:false,
                timeReq:240,
                Picture:"https://www.tasteofhome.com/wp-content/uploads/2021/01/tasty-butter-chicken-curry-dish-from-indian-cuisine-1277362334.jpg?fit=700,700"
            },
            {
                id:"gg6",
                dishName:"Paneer Masala",
                price:240,
                dishType:"Veg",
                isSpecial:false,
                timeReq:240,
                Picture:"https://www.tasteofhome.com/wp-content/uploads/2021/01/tasty-butter-chicken-curry-dish-from-indian-cuisine-1277362334.jpg?fit=700,700"
            }
        ]
    })
    const ImageHandler=(e)=>{
        const file=e.target.files[0]
        console.log("In Seller Edit Image")
        const url=URL.createObjectURL(file)
        seturl(url)
        SetFirstForm({...firstForm,ProfilePic:e.target.files[0]})
        // SetEdit({...Edit,image:file})
        // const reader = new FileReader();
        // const url=reader.readAsDataURL(file)
        //  reader.onloadend=function(e){
        //   SetEdit({...Edit,image:reader.result})
        //  }
     
    }
    const FirstSubmitHandler=(e)=>{
        e.preventDefault();
        console.log("submitted")
        console.log(firstForm)
     
    }

    //Edit Item
    const EditHandler=(item)=>{
        console.log("Edited" +item.id)
        setdish(item)
        setmodal(true)
    }
    const closeModal=()=>{
        setmodal(false);
    }

    //Add Item
    const AddHandler=()=>{
        console.log("Add Handler")
        setdish({})
        setmodal(true)
    }
    const FirstFormHandler=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
      SetFirstForm({...firstForm,[name]:value})
    }
    return(
     <div className={classes.Container}>
         <SellerHeader/>
         <div className={classes.InnerContainer}>
             {
                 modal?<EditModal open={modal} item={dish} close={closeModal}/>:""
             }
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
                        <input type="text" placeholder="Area Name" name="AreaName" value={firstForm.AreaName} onChange={FirstFormHandler}/>
                        </div>
                        <div className={classes.FaceBookContainer}>
                        <i className="fab fa-facebook"></i>
                        <input type="text" placeholder="Enter Facebook User Name" name="Facebook" value={firstForm.Facebook} onChange={FirstFormHandler}/>
                            </div>
                            <div className={classes.InstagramContainer}>
                            <i className="fab fa-instagram"></i>
                            <input type="text" placeholder="Enter Instagram User Name " name="Instagram" value={firstForm.Instagram} onChange={FirstFormHandler}/>
                                </div>
                                </div>
                                <div className={classes.InputTwo}>
                                    <div className={classes.PinCodeContainerFirst}>
                                        <p>PINCODE</p>
                                        <input type="number" placeholder="Your area pincode" name="Pincode" value={firstForm.Pincode} onChange={FirstFormHandler} />
                                        </div>
                                        <div className={classes.BioContainer}>
                                            <p>BIO</p>
                                            <textarea name="Bio" value={firstForm.Bio} onChange={FirstFormHandler}/>
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
                                <img src={ele.Picture}/>
                            </div>
                            <div className={classes.LeftContainer}>
                                <div className={classes.FoodNameContainer}>
                                    <p>{ele.dishName}</p>
                                </div>
                                <div className={classes.DishType}>
                                    <p>{ele.dishType}</p>
                                </div>
                                <div className={classes.TimeContainer}>
                                    <p>{ele.timeReq} mins</p>
                                </div>
                            </div>
                            <div className={classes.PriceContainer}>
                                <p> {ele.price} Rs</p>
                            </div>
                            <div className={classes.ButtonContainer}>
                                <div className={classes.EditButtonContainer}>
                                    <button type="button" onClick={()=>{EditHandler(ele)}}>Edit</button>
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
                    <div className={classes.AddItemContainer}>
        <button type="button" onClick={AddHandler}>Add Item</button>
    </div>
                </div>
                <div className={classes.SecondInnerContainer}>
                    <div className={classes.SpecialityHeader}>
                        <p>Menu Items</p>
                    </div>
                    <div className={classes.SpecialityCardContainer}>
                    {  
                    Edit.general.map((ele)=>{
                            return (
                            
                               
                                <div key={ele.id} className={classes.InnerSpecialContainer}>
                            <div className={classes.SpecialImageContainer}>
                                <img src={ele.Picture}/>
                            </div>
                            <div className={classes.LeftContainer}>
                                <div className={classes.FoodNameContainer}>
                                    <p>{ele.dishName}</p>
                                </div>
                                <div className={classes.DishType}>
                                    <p>{ele.dishType}</p>
                                </div>
                                <div className={classes.TimeContainer}>
                                    <p>{ele.timeReq} mins</p>
                                </div>
                            </div>
                            <div className={classes.PriceContainer}>
                                <p> {ele.price} Rs</p>
                            </div>
                            <div className={classes.ButtonContainer}>
                                <div className={classes.EditButtonContainer}>
                                    <button type="button"  onClick={()=>{EditHandler(ele)}}>Edit</button>
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
                    <div className={classes.AddItemContainer}>
        <button type="button">Add Item</button>
    </div>
                </div>
        </div>
    </div>
    )
}
export default SellerEditProfile;