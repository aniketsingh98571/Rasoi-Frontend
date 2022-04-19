import React, { useState } from "react"
import classes from './EditModal.module.css'
import Modal from 'react-modal'
import { toast } from "react-toastify"
import axios from "axios"
const EditModal=(props)=>{
    // console.log(props.item)
    const [menu,Setmenu]=useState({
        dishID:props.item._id,
        sellerID:props.SellerId,
        name:null,
        price:null,
        type:props.AddUpdate==="add"?"Veg":null,
        isSpecial:props.item.isSpecial,
        time:null,
        MenuPicture:null
    })

    // const [url,seturl]=useState()
    const ChangeHandler=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        Setmenu({...menu,[name]:value})
    }
    const PictureChange=(e)=>{
        const file=e.target.files[0]
        // console.log("In Seller Edit Image")
        const url=URL.createObjectURL(file)
        // seturl(url)
        document.getElementById("EditDishImageID").src=url
        Setmenu({...menu,MenuPicture:e.target.files[0]})

        // console.log("in edit modal picture")

    }

    //Update Function for editing dish items
    const SubmitHandler=(e)=>{
        e.preventDefault();
        // console.log(props.item.isSpecial)
        // Setmenu({...menu,isSpecial:props.item.isSpecial})
        const AddMenuItem=new FormData();
        AddMenuItem.append("dishID",menu.dishID)
        AddMenuItem.append("sellerID",menu.sellerID)
        AddMenuItem.append("dishName",menu.name)
        AddMenuItem.append("price",menu.price)
        AddMenuItem.append("timeReq",menu.time)
        AddMenuItem.append("dishType",menu.type)
        AddMenuItem.append("MenuPicture",menu.MenuPicture)
        AddMenuItem.append("isSpecial",menu.isSpecial)


        const EditMenuItem=new FormData();
        EditMenuItem.append("dishID",menu.dishID)
        EditMenuItem.append("sellerID",menu.sellerID)
        EditMenuItem.append("name",menu.name)
        EditMenuItem.append("price",menu.price)
        EditMenuItem.append("time",menu.time)
        EditMenuItem.append("type",menu.type)
        EditMenuItem.append("MenuPicture",menu.MenuPicture)
        EditMenuItem.append("isSpecial",menu.isSpecial)
        if(props.AddUpdate==="add"){
            // console.log("Item to be added")
            // if(menu.dishType===null)
            //     Setmenu({...menu,dishType:"Veg"})
            //  console.log(menu)
                axios
        .post("http://localhost:8080/seller/addDishes", AddMenuItem)
        .then((res) => {
        //   console.log(res);
          if(res.status===201){
            toast.success("Dish Added Successfully", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
              setTimeout(()=>{
                props.close();
                props.load(!props.loadvar)
              },5000)
          
          }
          })
        .catch((err) => {
          console.log(err);
        });
            
        }
        else{
            // console.log("Item not to be added")
           axios
                .put("http://localhost:8080/seller/editDish", EditMenuItem)
                .then((res) => {
                //   console.log(res);
                  if(res.status===200){
                    toast.success("Dish Updated Successfully", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                      });
                      setTimeout(()=>{
                        props.close();
                        props.load(!props.loadvar)
                      },5000)
                  
                  }
                  
                  }
                )
                .catch((err) => {
                  console.log(err);
                
                });
          
        }
    //    console.log(props.item.id + "edited in Modal")
    //    console.log(menu)
    //    console.log(props.SellerId)
    }
    return(
        <Modal isOpen={props.open}
        className={classes.Modal}
        overlayClassName={classes.OverlayClasses}>
            <div className={classes.Container}>
                <div className={classes.TitleContainer}>
                    <p>{props.AddUpdate==="add"?"Add Details":"Edit Details"}</p>
                   
                    <i class="fa-solid fa-xmark" onClick={props.close}></i>
                   
                </div>
                <div className={classes.Outer}>
                    <form onSubmit={SubmitHandler} encType='multipart/form-data'>
                <div className={classes.FormContainer}>
                    <div className={classes.FoodNameContainer}>
                            <div className={classes.FoodName}>
                                <p>Name of the Food:</p>
                            </div>
                            <div className={classes.FoodInput}>
                                <input type="text" name="name" value={menu.name} defaultValue={props.item.name} onChange={ChangeHandler}/>
                            </div>
                    </div>
                    <div className={classes.TypeContainer}>
                        <div className={classes.TypeText}>
                            <p>Type:</p>
                        </div>
                        <div className={classes.TypeSelect}>
                        <select name="dishType" id="type" onChange={ChangeHandler} value={menu.dishType}>
                          <option selected={props.item.type==="Veg"?"selected":""} value="Veg">Veg</option>
                           <option selected={props.item.type==="Non-Veg"?"selected":""} value="Non-Veg">Non-Veg</option>
                         </select>
                        </div>
                    </div>
                    <div className={classes.PriceContainer}>
                        <div className={classes.PriceText}>
                            <p>Price</p>
                        </div>
                        <div className={classes.PriceInput}>
                            <input type="number" name="price" value={menu.price} defaultValue={props.item.price} onChange={ChangeHandler}/>
                        </div>
                    </div>
                    <div className={classes.TimeContainer}>
                        <div className={classes.TimeText}>
                            <p>Time to cook:</p>
                        </div>
                        <div className={classes.TimeInput}>
                            <input type="number" max="240" min="30" value={menu.time} name="time" defaultValue={props.item.timeReq} onChange={ChangeHandler}/>
                        </div>
                    </div>
                    <div className={classes.ImageContainer}>
                    <div className={classes.ProfilePicContainer}>
                        
                        <div className={classes.ProfileInput}>
                        <label htmlFor="ProfileInputId1">
              <div className={classes.LabelContainer}>
              <img src={props.AddUpdate==="add"?"":`http://localhost:8080/${props.item.imageURL}`} id="EditDishImageID" alt="Add"/>
               <p>{props.AddUpdate==="add"?"Add Image":"Update Image"}</p>
              </div>
            </label>
            <input
              className={classes.FileInput}
              type="file"
              id="ProfileInputId1"
              name="ProfilePic"
           accept=".png,.jpg,.jpeg"
           onChange={PictureChange}
            />
                        </div>
                    </div>
                    </div>
                    <div className={classes.UpdateButton}>
                        <input type="submit" value={props.AddUpdate==="add"?"Add":"Update"}/>
                    </div>
                </div>
                </form>
                </div>
            </div>
        </Modal>
    )
}
export default EditModal;