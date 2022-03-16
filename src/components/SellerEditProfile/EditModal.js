import React from "react"
import classes from './EditModal.module.css'
import Modal from 'react-modal'
const EditModal=(props)=>{
    return(
        <Modal isOpen={props.open}
        className={classes.Modal}
        overlayClassName={classes.OverlayClasses}>
            <div className={classes.Container}>
                <div className={classes.TitleContainer}>
                    <p>Edit Details</p>
                </div>
                <div className={classes.Outer}>
                <div className={classes.FormContainer}>
                    <div className={classes.FoodNameContainer}>
                            <div className={classes.FoodName}>
                                <p>Name of the Food:</p>
                            </div>
                            <div className={classes.FoodInput}>
                                <input type="text" defaultValue={props.item.foodName}/>
                            </div>
                    </div>
                    <div className={classes.TypeContainer}>
                        <div className={classes.TypeText}>
                            <p>Type:</p>
                        </div>
                        <div className={classes.TypeSelect}>
                        <select name="type" id="type">
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
                            <input type="number" defaultValue={props.item.price}/>
                        </div>
                    </div>
                    <div className={classes.TimeContainer}>
                        <div className={classes.TimeText}>
                            <p>Time to cook:</p>
                        </div>
                        <div className={classes.TimeInput}>
                            <input type="number" max="240" min="30" defaultValue={props.item.time}/>
                        </div>
                    </div>
                    <div className={classes.ImageContainer}>
                    <div className={classes.ProfilePicContainer}>
                        
                        <div className={classes.ProfileInput}>
                        <label htmlFor="ProfileInputId">
              <div className={classes.LabelContainer}>
              <img src={props.item.image}/>
               <p>Update Image</p>
              </div>
            </label>
            <input
              className={classes.FileInput}
              type="file"
              id="ProfileInputId"
              name="ProfilePic"
           accept=".png,.jpg,.jpeg"
        //    onChange={ImageHandler}
            />
                        </div>
                    </div>
                    </div>
                    <div className={classes.UpdateButton}>
                        <button type="button">Update</button>
                    </div>
                </div>
                </div>
            </div>
        </Modal>
    )
}
export default EditModal;