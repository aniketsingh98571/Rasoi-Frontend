import React, { useState} from "react"
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
    // console.log(EditUser)
    // console.log(props.ConsumerId)
    const ConsumerEdit=new FormData()
    ConsumerEdit.append("consumerID",props.ConsumerId)
    ConsumerEdit.append("name",EditUser.name)
    ConsumerEdit.append("image",EditUser.profilepic)
    ConsumerEdit.append("address",EditUser.address)
    
    axios
        .put("http://52.173.243.196/consumer/editProfile",ConsumerEdit)
        .then((res) => {
        //   console.log(res);
          if(res.status===200){
            toast.success("Profile Updated", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme:"dark"
              });
              setTimeout(()=>{
                  props.close();
                 
              },5000)
          }
           }
        )
        .catch((err) => {
          console.log(err);
        });
        
}

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
              <img src={url} alt=""/>
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