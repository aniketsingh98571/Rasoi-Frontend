import React, { useEffect, useState } from "react";
import classes from "./UserDashboard.module.css";

import UserEditModal from "./UserEditModal";
import SecondaryHeader from "../SecondaryHeader/SecondaryHeader";
import Consumer from "../../assets/images/Consumer.jpg";
import axios from "axios";
import Loader from "../SellerDashboard/Loader";
import RatingModal from "./RatingModal";
const UserDashboard = () => {
  const [modal, setmodal] = useState(false);
  const [UI, setUI] = useState(true);
  const [Orders, setOrders] = useState({});
  const [load, reload] = useState(false);
  const [rating, setrating] = useState({
    orderID: "",
    sellerID: "",
    rating: false,
  });
  // const [orderid,setorderid]=useState("")
  useEffect(() => {
    const ConsumerId = localStorage.getItem("ConsumerId");
    if (ConsumerId === null) {
      window.location.href = "/";
    }
    axios
      .get("http://13.89.1.212/consumer/profile", {
        params: {
          consumerID: ConsumerId,
        },
      })
      .then(function (response) {
        // console.log(response)
        setOrders(response.data);
        setUI(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [load]);
  const EditProfileFunction = () => {
    setmodal(true);
  };
  const closeModal = () => {
    setmodal(false);
    reload(!load);
  };
  const RateSeller = (orderID, sellerID) => {
    setrating({ orderID: orderID, sellerID: sellerID, rating: true });
    // console.log("in rate seller")
    // console.log(orderid)
    // setorderid()
    // console.log(orderID)
    // console.log(rating)
  }
  const closeRate=()=>{
    setrating({rating:false})
    reload(!load)
}
    return(
       
        <>
        {
              !UI&&Object.keys(Orders).length !== 0?
       <div className={classes.OuterContainer}>
           <SecondaryHeader/>
           {rating.rating?<RatingModal  close={closeRate} consumerID={localStorage.getItem("ConsumerId")} sellerID={rating.sellerID} orderID={rating.orderID}/>:null}
          { modal?<UserEditModal open={true} close={closeModal} ConsumerId={localStorage.getItem("ConsumerId")} ConsumerName={Orders.consumerInfo.name} ConsumerAddress={Orders.consumerInfo.address} ConsumerPic={Orders.consumerInfo.img} ConsumerData={Orders} SetConsumerData={setOrders}/>:null}
       <div className={classes.FirstContainer}>
               <div className={classes.LeftContainer}>
                  
                 <div className={classes.ProfileImageContainer}>
                     {  Orders.consumerInfo.img===null?  <img src={Consumer} alt="Add User"/>:
                       <img src={`http://104.43.237.82/${Orders.consumerInfo.img}`} alt="User"/>
                     }
                   </div>

              <div className={classes.InfoContainer}>
                <div className={classes.NameContainer}>
                  <p>{Orders.consumerInfo.name}</p>
                </div>
                <div className={classes.MobileContainer}>
                  <p>{Orders.consumerInfo.mobile}</p>
                </div>
                <div className={classes.AddressContainer}>
                  <p>{Orders.consumerInfo.address}</p>
                </div>
              </div>
            </div>
            <div className={classes.RightContainer}>
              <div className={classes.ButtonContainer}>
                <button type="button" onClick={EditProfileFunction}>
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
          <div className={classes.SecondContainer}>
            <div className={classes.OrdesContainer}>
              <div className={classes.OrderText}>
                <p>Your Orders</p>
              </div>
              {Orders.ordersInfo.length === 0 ? (
                <p className={classes.EmptyConsumer}>
                  No Orders Placed Currently
                </p>
              ) : (
                <div className={classes.OrdersListContainer}>
                  {Orders.ordersInfo.map((ele) => {
                    return (
                      <div className={classes.SingleOrder} key={ele.orderID}>
                        <div className={classes.PartOneContainer}>
                          <div className={classes.LeftPartOne}>
                            <div className={classes.SellerNameContainer}>
                              <p>{ele.sellerName}</p>
                            </div>
                            <div className={classes.SellerAddressContainer}>
                              <p>
                                {ele.areaName}, {ele.pincode}
                              </p>
                            </div>
                          </div>
                          <div className={classes.PriceContainer}>
                            <p>Rs {ele.totalCost}</p>
                          </div>
                        </div>
                        <div className={classes.PartTwoContainer}>
                          <div className={classes.ItemsText}>
                            <p>ITEMS</p>
                          </div>
                          {ele.dishes.map((ele2) => {
                            return (
                              <div
                                className={classes.ItemContainer}
                                key={ele2.id}
                              >
                                <p>
                                  {ele2.dishName} x {ele2.dishQty}
                                </p>
                              </div>
                            );
                          })}

                          <div className={classes.OrderedOnContainer}>
                            <p>ORDERED ON</p>
                            <p>{ele.dateTime}</p>
                          </div>
                        </div>
                        <div className={classes.PartThreeContainer}>
                          <div className={classes.StatusContainer}>
                            <p>
                              <span>Status</span>:- {ele.orderStatus}
                            </p>
                          </div>
                          {ele.isRated === false &&
                          ele.orderStatus === "Delivered" ? (
                            <div className={classes.SellerRatingContainer}>
                              <button
                                type="button"
                                onClick={() =>
                                  RateSeller(ele.orderID, ele.sellerID)
                                }
                              >
                                Rate the Seller
                              </button>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>: null}

      {UI ? <Loader /> : null}
    </>
  );
};

export default UserDashboard;
