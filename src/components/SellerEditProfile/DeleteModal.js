import React from "react"
import classes from './DeleteModal.module.css'
import Modal from 'react-modal'
import axios from "axios"
const DeleteModal=(props)=>{
    const DeleteDish=()=>{
      
        const Config={
            sellerID:props.config.sellerID,
            dishID:props.config.dishID
        }
        axios
        .delete("http://localhost:8080/seller/deleteDish", {
           params:{ sellerID:props.config.sellerID,
            dishID:props.config.dishID
           }
        })
        .then((res) => {
          console.log(res);
          
          }
        )
        .catch((err) => {
          console.log(err);
        
        });
        props.close();
        console.log(Config)
    }
    return(
        <Modal isOpen={true}
        className={classes.Modal}>
            <div className={classes.OuterContainer}>
                <div className={classes.InnerContainer}>
                    <div className={classes.FirstTextContainer}>
                        <p>Are you sure, you want to Delete?</p>
                    </div>
                    <div className={classes.ButtonContainer}>
                        <div className={classes.YesButton}>
                            <button type="button" onClick={DeleteDish}>Yes</button>
                        </div>
                        <div className={classes.NoButton}>
                            <button type="button" onClick={props.close}>No</button>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}
export default DeleteModal;