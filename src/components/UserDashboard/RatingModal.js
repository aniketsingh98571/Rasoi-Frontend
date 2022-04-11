import React, { useState } from "react"
import Modal from "react-modal"
import classes from './RatingModal.module.css'
import Ratings from 'react-ratings-declarative';
import axios from "axios";
import { toast } from "react-toastify";
const RatingModal=(props)=>{
    const [stars,setStars]=useState(0)
    const RatingHandler=(newRating)=>{
        setStars(newRating)
        console.log(newRating)
    }
    const SubmitRating=()=>{
        console.log(stars)
        console.log("Order id "+props.orderID)
        console.log("Seller Id"+props.sellerID)
        console.log("Order id "+props.orderID)
        console.log(stars+" rating")
        axios
        .post("http://localhost:8080/consumer/rateSeller", {
          consumerID:props.consumerID,
          sellerID:props.sellerID,
          orderID:props.orderID,
          rating:stars
})
        .then(function (response) {
          console.log(response);
          if(response.status===200){
            toast.success("Seller Rated", {
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
         
         })
        .catch(function (error) {
          console.log(error);
        });
    }
    return(
        <Modal isOpen={true}
        className={classes.Modal}
        overlayClassName={classes.OverlayClasses}>
            <div className={classes.OuterContainer}>
                <div className={classes.RateText}>
                    <p>Rate the Seller  <i class="fa-solid fa-xmark" onClick={props.close} ></i></p>
                     </div>
                <div className={classes.InnerContainer}>
                    <div className={classes.RatingContainer}>
                        <Ratings typeOfWidget="Star"
                        rating={stars}
                        changeRating={(newRating)=>RatingHandler(newRating)}
                        widgetRatedColors="#FFD803"
                        widgetHoverColors="#FFD803"
                        >
                        <Ratings.Widget />
                        <Ratings.Widget />
                        <Ratings.Widget />
                        <Ratings.Widget />
                        <Ratings.Widget />
                       </Ratings>
                    </div>
                    <div className={classes.ButtonContainer}>
                        <button type="button" onClick={SubmitRating}>Submit</button>
                    </div>
                </div>
            </div>
            
        </Modal>
    )
}
export default RatingModal;