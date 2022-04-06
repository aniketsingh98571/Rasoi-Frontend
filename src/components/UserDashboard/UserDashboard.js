import React, { useState } from "react"
import classes from './UserDashboard.module.css'
import Modal from "react-modal"
import UserEditModal from "./UserEditModal"
import Order from "autoprefixer/lib/hacks/order"
import Consumer from '../../assets/images/Consumer.jpg'
const UserDashboard =()=>{
    const [modal,setmodal]=useState(false)
    const [Orders,setOrders]=useState({
        ConsumerId:"dd2",
        ConsumerName:"Aniket Rajesh Singh",
        ConsumerMobileNo:8600469998,
        ConsumerAddress:"Rajshree Blossom flat no 21, Siddhatek Nagar Kamatwade Nashik, 422009",
        ConsumerPic:null,
        CartOrders:[
        {
            id:"gg1",
            SellerName:"Somesh Lad",
            SellerAreaName:"Kamatwade",
            SellerPincode:422009,
            Price:720,
            Status:"Pending",
            DateTime:"21th Nov 12:22PM",
            OrdersList:[
                {
                    id:"dd1",
                    DishName:"Paneer Masala",
                    Quantity:2
                },
                {
                    id:"dd2",
                    DishName:"Paneer Masala",
                    Quantity:2
                },
                {
                    id:"dd3",
                    DishName:"Paneer Masala",
                    Quantity:2
                }
            ]
        },
        {
            id:"gg2",
            SellerName:"Somesh Lad",
            SellerAreaName:"Kamatwade",
            SellerPincode:422009,
            Price:720,
            Status:"Pending",
            DateTime:"21th Nov 12:22PM",
            OrdersList:[
                {
                    id:"dd4",
                    DishName:"Paneer Masala",
                    Quantity:2
                },
                {
                    id:"dd5",
                    DishName:"Paneer Masala",
                    Quantity:2
                },
                {
                    id:"dd6",
                    DishName:"Paneer Masala",
                    Quantity:2
                }
            ]
        },
        {
            id:"gg4",
            SellerName:"Somesh Lad",
            SellerAreaName:"Kamatwade",
            SellerPincode:422009,
            Price:720,
            Status:"Pending",
            DateTime:"21th Nov 12:22PM",
            OrdersList:[
                {
                    id:"dd7",
                    DishName:"Paneer Masala",
                    Quantity:2
                },
                {
                    id:"dd8",
                    DishName:"Paneer Masala",
                    Quantity:2
                },
                {
                    id:"dd9",
                    DishName:"Paneer Masala",
                    Quantity:2
                }
            ]
        }

    ]})
    const EditProfileFunction=()=>{
        setmodal(true)
    }
    const closeModal=()=>{
        setmodal(false)
    }
    return(
       
        
       <div className={classes.OuterContainer}>
           
          { modal?<UserEditModal open={true} close={closeModal} ConsumerId={Orders.ConsumerId} ConsumerName={Orders.ConsumerName} ConsumerAddress={Orders.ConsumerAddress} ConsumerPic={Orders.ConsumerPic}/>:null}
       <div className={classes.FirstContainer}>
               <div className={classes.LeftContainer}>
                  
                 <div className={classes.ProfileImageContainer}>
                     {  Orders.ConsumerPic===null?  <img src={Consumer} alt="Add User Image"/>:
                       <img src={Orders.ConsumerPic} alt="User Image"/>
                     }
                   </div>

                   <div className={classes.InfoContainer}>
                       <div className={classes.NameContainer}>
                           <p>{Orders.ConsumerName}</p>
                       </div>
                       <div className={classes.MobileContainer}>
                           <p>{Orders.ConsumerMobileNo}</p>
                       </div>
                       <div className={classes.AddressContainer}>
                           <p>{Orders.ConsumerAddress}</p>
                       </div>
                   </div>
               </div>
               <div className={classes.RightContainer}>
                   <div className={classes.ButtonContainer}>
                       <button type="button" onClick={EditProfileFunction}>Edit Profile</button>
                   </div>
               </div>
           </div>
           <div className={classes.SecondContainer}>
               <div className={classes.OrdesContainer}>
                   <div className={classes.OrderText}>                  
                    <p>Your Orders</p>
                    </div>
            <div className={classes.OrdersListContainer}>
                {
                    Orders.CartOrders.map((ele)=>{
                        return (
                            <div className={classes.SingleOrder} key={ele.id}>
                            <div className={classes.PartOneContainer}>
                                <div className={classes.LeftPartOne}>
                                    <div className={classes.SellerNameContainer}>
                                        <p>{ele.SellerName}</p>
                                    </div>
                                    <div className={classes.SellerAddressContainer}>
                                        <p>{ele.SellerAreaName}, {ele.SellerPincode}</p>
                                    </div>
                                </div>
                                <div className={classes.PriceContainer}>
                                    <p>Rs {ele.Price}</p>
                                </div>
                            </div>
                            <div className={classes.PartTwoContainer}>
                                <div className={classes.ItemsText}>
                                    <p>ITEMS</p>
                                </div>
                                {
                                    ele.OrdersList.map((ele2)=>{
                                        return(
                                            <div className={classes.ItemContainer} key={ele2.id}>
                                            <p>{ele2.DishName} x {ele2.Quantity}</p>
                                           </div>
                                        )
                                    })
                                }
                              
                                <div className={classes.OrderedOnContainer}>
                                    <p>ORDERED ON</p>
                                    <p>{ele.DateTime}</p>
                                </div>
                            </div>
                            <div className={classes.PartThreeContainer}>
                                <div className={classes.StatusContainer}>
                                    <p><span>Status</span>:- Delivered</p>
                                </div>
                                <div className={classes.SellerRatingContainer}>
                                    <button type="button">Rate the Seller</button>
                                </div>
                            </div>
                        </div>
                        )
                    })
                }
               
            </div>
               </div>
           </div>
      

       </div>

    )
}
export default UserDashboard