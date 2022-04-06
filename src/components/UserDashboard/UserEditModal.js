import React, { useState,useEffect } from "react"
import Modal from "react-modal"
import classes from './UserEditModal.module.css'
import axios from "axios"
import { toast } from "react-toastify"
const UserEditModal=(props)=>{
    const [EditUser,SetEditUser]=useState({
        name:null,
       address:null,
        profilepic:null
    })
    const [url,seturl]=useState(null)
    const ChangeHandler1=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
     SetEditUser({...EditUser,[name]:value})
    }
const ImageHandler1=(e)=>{
    const url1=URL.createObjectURL(e.target.files[0])
    seturl(url1)
    SetEditUser({...EditUser,profilepic:e.target.files[0]})
}
const SubmitHandler1=(e)=>{
    e.preventDefault()
    console.log(EditUser)
    console.log(props.ConsumerId)
    axios
        .put("http://localhost:8080/seller/fillSellerDetails", EditUser)
        .then((res) => {
          console.log(res);
           }
        )
        .catch((err) => {
          console.log(err);
        });
        toast.success("Profile Updated", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
}
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
        console.log(response);
        
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
   return( 
   <Modal isOpen={props.open}
   className={classes.Modal}>
       <div className={classes.OuterContainer}>
           <div className={classes.EditBox}>
               <p>Edit Profile</p>
               <i class="fa-solid fa-xmark" onClick={props.close} ></i>
           </div>
           <div className={classes.FormContainer}>
           <form onSubmit={SubmitHandler1} encType='multipart/form-data'>
       <div className={classes.ProfilePicContainer}>
                        
                        <div className={classes.ProfileInput}>
                        <label htmlFor="ProfileInputId3">
              <div className={classes.LabelContainer}>
              <img src={url}/>
               <p>Update Image</p>
              </div>
            </label>
            <input
              className={classes.FileInput}
              type="file"
              id="ProfileInputId3"
              name="ProfilePic"
           accept=".png,.jpg,.jpeg"
           onChange={ImageHandler1}
            />
                        </div>
                    </div>
                    <div className={classes.NameContainer}>
                        <div className={classes.NameLabel}>
                            <p>Name</p>
                        </div>
                        <div className={classes.NameInput}>
                            <input type="text" name="name" onChange={ChangeHandler1} defaultValue={props.ConsumerName} value={EditUser.name}/>
                        </div>
                    </div>
                <div className={classes.AddressContainer}>
                        <div className={classes.AddressText}>
                            <p>Address</p>
                        </div>
                        <div className={classes.AddressInput}>
                            <input type="text" name="address" onChange={ChangeHandler1} defaultValue={props.ConsumerAddress} value={EditUser.address}/>
                        </div>
                    </div>
                    <div className={classes.SaveButton}>
                        <input type="submit" value="Save Details"/>
                    </div>
                    </form>
                    </div>
                    
       </div>
    </Modal>
   )
}
export default UserEditModal;