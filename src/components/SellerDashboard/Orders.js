import React, { useState } from "react"
import classes from './Orders.module.css'
import axios from "axios"
import SellerHeader from "../SellerHeader/SellerHeader"
const Orders=()=>{
    const [delivered,setdelivered]=useState(false)
    const [expandDiv, setExpandDiv] = useState({})
    const [Orders,SetOrders]=useState([
        {
            dishes:[{
                dishName:"Paneer Masala",
                dishQuantity:2
            },
            {
                dishName:"Paneer Masala",
                dishQuantity:2
            },
            {
                dishName:"Paneer Masala",
                dishQuantity:2
            }
        ],
        id:"gg1",
        customerName:"Aniket Singh",
        customerPhoneNo:8600469998,
        totalCost:350
        },
        {
            dishes:[{
                dishName:"Paneer Masala",
                dishQuantity:2
            },
            {
                dishName:"Paneer Masala",
                dishQuantity:2
            },
            {
                dishName:"Paneer Masala",
                dishQuantity:2
            }
        ],
        id:"gg2",
        customerName:"Aniket Singh",
        customerPhoneNo:8600469998,
        totalCost:350
    },
    {
        dishes:[{
            dishName:"Paneer Masala",
            dishQuantity:2
        },
        {
            dishName:"Paneer Masala",
            dishQuantity:2
        },
        {
            dishName:"Paneer Masala",
            dishQuantity:2
        }
    ],
    id:"gg3",
    customerName:"Aniket Singh",
    customerPhoneNo:8600469998,
    totalCost:350
}

    ])
    const NavigateNext=()=>{
        window.location.href="/SellerDashboard"
    }
    const MarkDelivered=(id)=>{
        console.log(id + " Delivered ")
    }
    const OrderAcceptance=(id,state)=>{
        setdelivered(true)
        for (var key in expandDiv) {
            expandDiv[key] = true
        }
        setExpandDiv({
            ...expandDiv,
            ['div' + id]: state
        })
        console.log(id + " Order Accepted")
    }
    const OrderRejection=(id)=>{
        console.log(id + " Order Rejected")
    }
    return (
      <div className={classes.OuterContainer}>
          <SellerHeader/>
          <div className={classes.ButtonContainer}>
                    <button className={classes.ActiveClass} onClick={NavigateNext} type="button">Dashboard</button>
                    <button className={classes.SecondButton}  type="button">Orders</button>
            </div>
          <div className={classes.HeaderContainer}>
              <p>Pending Orders</p>
          </div>
          <div className={classes.CardContainer}>
              {
                  Orders.map((ele1)=>{
                 return   <div className={classes.InnerCardContainer} key={ele1.id}>
                    <div className={classes.LeftContainer}>
                        {
                            ele1.dishes.map((ele)=>{
                                return <div className={classes.MenuContainer}>
                                <p>{ele.dishName} x {ele.dishQuantity}</p>
                                </div>
                            })
                  }
                          <div className={classes.TotalContainer}>
                              <p> Total Amount: Rs {ele1.totalCost}</p>
                          </div>
                    </div>
                    <div className={classes.RightContainer}>
                        <div className={classes.NameContainer}>
                            <p>{ele1.customerName}</p>
                            <i class="fa-solid fa-address-card"></i>
                        </div>
                        <div className={classes.MobileContainer}>
                            <p>{ele1.customerPhoneNo}</p>
                            <i class="fa-solid fa-mobile-button"></i>
                        </div>
                        <div className={classes.ButtonContainerInner}>
                            {
                                 delivered&& expandDiv["div"+ele1.id]?
                                 <div className={classes.DeliveredButton}>
                                <button type="button" onClick={()=>{MarkDelivered(ele1.id)}}>Mark as Delivered</button>
                            </div>:
                            <> 
                             <div className={classes.ButtonOneContainer}>
                                <button type="button" onClick={()=>{OrderAcceptance(ele1.id,true)}}>Accept Order</button>
                            </div>
                            <div className={classes.ButtonTwoContainer}>
                                <button type="button" onClick={()=>{OrderRejection(ele1.id)}}>Reject Order</button>
                            </div>
                            </>
                            
                         }
                        </div>
                    </div>
                </div>
                  })
              }
          </div>
      </div>
    )
}
export default Orders