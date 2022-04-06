import React, { useState,useEffect } from "react"
import classes from './SellerEditProfile.module.css'
import SellerHeader from "../SellerHeader/SellerHeader"
import EditModal from "./EditModal"
import axios from "axios"
import DeleteModal from "./DeleteModal"
import Loader from "../SellerDashboard/Loader"
const SellerEditProfile=()=>{
    
    const [Edit,SetEdit]=useState({})
    const [modal,setmodal]=useState(false)
    const [dish,setdish]=useState({})
    const [UI,setUI]=useState(true)
    const [add,setadd]=useState("")
    const [Delete,setdelete]=useState({
        open:false,
        dishID:null,
        sellerID:null
    })
  
    const [url,seturl]=useState("")
 
//    console.log("Empty "+Edit)
    useEffect(() => {
        let sellerID = localStorage.getItem("SellerId");
        console.log(sellerID);
    
        axios
          .get("http://localhost:8080/seller/sellerDashboard", {
            params: {
              sellerID: sellerID,
            },
          })
          .then(function (response) {
            console.log(response)
            SetEdit(response.data)
             setUI(false)
                // seturl(response.data.sellerInfo.img)
            })
          .catch(function (error) {
            console.log(error);
          });
      }, []);
      const [firstForm,SetFirstForm]=useState({
        sellerID:localStorage.getItem("SellerId"),
        ProfilePic:null,
        areaName:null,
        facebook:null,
        instagram:null,
        pinCode:null,
        bio:null
    })
    const ImageHandler=(e)=>{
        const file=e.target.files[0]
        console.log("In Seller Edit Image")
        const url=URL.createObjectURL(file)
        document.getElementById("SellerPersonalImageID").src=url
        // seturl(url)
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
        const SubmitFirstForm=new FormData();
        SubmitFirstForm.append("sellerID",firstForm.sellerID)
        SubmitFirstForm.append("areaName",firstForm.areaName)
        SubmitFirstForm.append("pinCode",firstForm.pinCode)
        SubmitFirstForm.append("picture",firstForm.ProfilePic)
        SubmitFirstForm.append("bio",firstForm.bio)
        SubmitFirstForm.append("facebook",firstForm.facebook)
        SubmitFirstForm.append("instagram",firstForm.instagram)
        axios
        .put("http://localhost:8080/seller/editSellerInfo", SubmitFirstForm)
        .then((res) => {
          console.log(res);
           }
        )
        .catch((err) => {
          console.log(err);
        });
     
    }

    //Edit Item
    const EditHandler=(item)=>{
        console.log("Edited" +item.id)
        setdish(item)
        setmodal(true)
        setadd("")
    }
    const closeModal=()=>{
        setmodal(false);
    }

    //Add Item
    const AddHandler=(speciality,add)=>{
        console.log("Add Handler")
        setadd(add)
        setdish({isSpecial:speciality})
        setmodal(true)
    }
    const FirstFormHandler=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
      SetFirstForm({...firstForm,[name]:value})
    }

    //Delete Dish
    const DeleteHandler=(id)=>{
        console.log(" Deleted "+id)
        setdelete({dishID:id,sellerID:Edit.sellerInfo.id,open:true})
        
    }
    const closeDelete=()=>{
        setdelete({open:false})
    }

    return(
        <>
        {
            !UI&&Object.keys(Edit).length !== 0?

            
     <div className={classes.Container}>
      {()=>{seturl(Edit.sellerInfo.img)}}
         <SellerHeader/>
      {  Delete.open? <DeleteModal config={Delete} close={closeDelete}/>:""}
         <div className={classes.InnerContainer}>
             {
                 modal?<EditModal open={modal} item={dish} close={closeModal} AddUpdate={add} SellerId={Edit.sellerInfo.id}/>:""
             }
             <form onSubmit={FirstSubmitHandler} encType='multipart/form-data'>
         <div className={classes.EditProfileTextContainer}>
             <div className={classes.EditProfileText}>
                 <p>Edit Your Profile</p>
            </div>
            <div className={classes.BackDashboardButton}>
                <button type="button" onClick={()=>{window.location.href="/SellerDashboard"}}>Back to Dashboard</button>
            </div>
        </div>
        <div className={classes.FirstContainer}>
    
        <div className={classes.ProfilePicContainer}>
                        
                        <div className={classes.ProfileInput}>
                        <label htmlFor="ProfileInputId">
              <div className={classes.LabelContainer}>
              <img src={`http://localhost:8080/${Edit.sellerInfo.img}`} id="SellerPersonalImageID"/>
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
                        <input type="text" placeholder="Area Name" name="areaName" value={firstForm.areaName} onChange={FirstFormHandler} defaultValue={Edit.sellerInfo.areaName}/>
                        </div>
                        <div className={classes.FaceBookContainer}>
                        <i className="fab fa-facebook"></i>
                        <input type="text" placeholder="Enter Facebook User Name" name="facebook" value={firstForm.facebook} onChange={FirstFormHandler} defaultValue={Edit.sellerInfo.facebook}/>
                            </div>
                            <div className={classes.InstagramContainer}>
                            <i className="fab fa-instagram"></i>
                            <input type="text" placeholder="Enter Instagram User Name " name="instagram" value={firstForm.instagram} onChange={FirstFormHandler} defaultValue={Edit.sellerInfo.instagram}/>
                                </div>
                                </div>
                                <div className={classes.InputTwo}>
                                    <div className={classes.PinCodeContainerFirst}>
                                        <p>PINCODE</p>
                                        <input type="number" placeholder="Your area pincode" name="pinCode" value={firstForm.pinCode} onChange={FirstFormHandler} defaultValue={Edit.sellerInfo.pinCode} />
                                        </div>
                                        <div className={classes.BioContainer}>
                                            <p>BIO</p>
                                            <textarea name="bio" value={firstForm.bio} onChange={FirstFormHandler} defaultValue={Edit.sellerInfo.bio}/>
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
                    Edit.specialDishes.specialDishes.map((ele)=>{
                            return (
                            <div key={ele._id} className={classes.InnerSpecialContainer}>
                            <div className={classes.SpecialImageContainer}>
                                <img src={`http://localhost:8080/${ele.imageURL}`} loading="lazy"/>
                            </div>
                            <div className={classes.LeftContainer}>
                                <div className={classes.FoodNameContainer}>
                                    <p>{ele.name}</p>
                                </div>
                                <div className={classes.DishType}>
                                    <p>{ele.type}</p>
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
                                    <button type="button" onClick={()=>{DeleteHandler(ele._id)}}>Delete</button>
                                </div>
                            </div>
                            
                        </div>
                      
                            )
                            
                    })  
}
    
                    </div>
                    <div className={classes.AddItemContainer}>
        <button type="button" onClick={()=>{AddHandler(true,"add")}}>Add Item</button>
    </div>
                </div>
                <div className={classes.SecondInnerContainer}>
                    <div className={classes.SpecialityHeader}>
                        <p>Menu Items</p>
                    </div>
                    <div className={classes.SpecialityCardContainer}>
                    {  
                    Edit.generalDishes.generalDishes.map((ele)=>{
                            return (
                            
                               
                                <div key={ele._id} className={classes.InnerSpecialContainer}>
                            <div className={classes.SpecialImageContainer}>
                                <img src={`http://localhost:8080/${ele.imageURL}` }/>
                            </div>
                            <div className={classes.LeftContainer}>
                                <div className={classes.FoodNameContainer}>
                                    <p>{ele.name}</p>
                                </div>
                                <div className={classes.DishType}>
                                    <p>{ele.type}</p>
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
                                    <button type="button" onClick={()=>{DeleteHandler(ele._id)}}>Delete</button>
                                </div>
                            </div>
                            
                        </div>
                      
                            )
                            
                    })  
}
    
                    </div>
                    <div className={classes.AddItemContainer}>
        <button type="button" onClick={()=>{AddHandler(false,"add")}}>Add Item</button>
    </div>
                </div>
        </div>
    </div>:null
}
{UI?<Loader/>:null}
    </>
    )
}
export default SellerEditProfile;