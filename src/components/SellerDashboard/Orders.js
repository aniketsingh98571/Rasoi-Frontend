import React, { useState } from "react"
import classes from './Orders.module.css'
import axios from "axios"
import SellerHeader from "../SellerHeader/SellerHeader"
const Orders=()=>{
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
    customerName:"Aniket Singh",
    customerPhoneNo:8600469998,
    totalCost:350
}

    ])
    const NavigateNext=()=>{
        window.location.href="/SellerDashboard"
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
                 return   <div className={classes.InnerCardContainer}>
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
                            <div className={classes.ButtonOneContainer}>
                                <button type="button">Accept Order</button>
                            </div>
                            <div className={classes.ButtonTwoContainer}>
                                <button type="button">Reject Order</button>
                            </div>
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