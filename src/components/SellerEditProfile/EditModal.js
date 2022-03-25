import React, { useState } from "react"
import classes from './EditModal.module.css'
import Modal from 'react-modal'
const EditModal=(props)=>{
    // console.log(props.item)
    const [menu,Setmenu]=useState({
        dishName:"",
        price:"",
        dishType:"Veg",
        isSpecial:props.item.isSpecial,
        timeReq:"",
        MenuPicture:null
    })
    const ChangeHandler=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        Setmenu({...menu,[name]:value})
    }
    const PictureChange=(e)=>{
        Setmenu({...menu,MenuPicture:e.target.files[0]})
        console.log("in edit modal picture")

    }

    //Update Function for editing dish items
    const SubmitHandler=(e)=>{
        e.preventDefault();
        // console.log(props.item.isSpecial)
        // Setmenu({...menu,isSpecial:props.item.isSpecial})
       console.log(props.item.id + "edited in Modal")
       console.log(menu)
    }
    return(
        <Modal isOpen={props.open}
        className={classes.Modal}
        overlayClassName={classes.OverlayClasses}>
            <div className={classes.Container}>
                <div className={classes.TitleContainer}>
                    <p>Edit Details</p>
                   
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
                                <input type="text" name="dishName" value={menu.dishName} defaultValue={props.item.dishName} onChange={ChangeHandler}/>
                            </div>
                    </div>
                    <div className={classes.TypeContainer}>
                        <div className={classes.TypeText}>
                            <p>Type:</p>
                        </div>
                        <div className={classes.TypeSelect}>
                        <select name="dishType" id="type" onChange={ChangeHandler} value={menu.dishType}>
                          <option selected={props.item.dishType==="Veg"?"selected":""} value="Veg">Veg</option>
                           <option selected={props.item.dishType==="Non-Veg"?"selected":""} value="Non-Veg">Non-Veg</option>
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
                            <input type="number" max="240" min="30" value={menu.timeReq} name="timeReq" defaultValue={props.item.timeReq} onChange={ChangeHandler}/>
                        </div>
                    </div>
                    <div className={classes.ImageContainer}>
                    <div className={classes.ProfilePicContainer}>
                        
                        <div className={classes.ProfileInput}>
                        <label htmlFor="ProfileInputId1">
              <div className={classes.LabelContainer}>
              <img src={props.item.Picture}/>
               <p>Update Image</p>
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
                        <input type="submit" value="Update"/>
                    </div>
                </div>
                </form>
                </div>
            </div>
        </Modal>
    )
}
export default EditModal;