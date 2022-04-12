import React, { useEffect, useState } from "react";
import classes from "./Orders.module.css";
import axios from "axios";
import SellerHeader from "../SellerHeader/SellerHeader";
import Loader from "./Loader";
import { toast } from "react-toastify";
const Orders = () => {
  const [delivered, setdelivered] = useState(false);
  const [expandDiv, setExpandDiv] = useState({});
  const [MenuOrders, SetOrders] = useState({});
  const [load, reload] = useState(false);
  const [UI, setUI] = useState(true);
  const [Empty, SetEmpty] = useState(false);

  useEffect(() => {
    const sellerID = localStorage.getItem("SellerId");
    if (sellerID === null) {
      window.location.href = "/SellerSignIn";
    }
    // console.log(sellerID);
    axios
      .get("http://localhost:8080/seller/getOrders", {
        params: {
          sellerID: sellerID,
        },
      })
      .then(function (response) {
        console.log(response);

        if (response.data.message === "no orders till now!!!") {
          SetEmpty(true);
          setUI(false);
        } else if (response.data.message === "orders") {
          SetOrders(response.data);
          setUI(false);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [load]);
  const NavigateNext = () => {
    window.location.href = "/SellerDashboard";
  };
  const MarkDelivered = (id) => {
    const sellerID = localStorage.getItem("SellerId");
    const orderID = id;
    // console.log(id + " Delivered ")
    axios
      .post("http://localhost:8080/seller/markAsDeliver", {
        sellerID: sellerID,
        orderID: orderID,
      })
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          toast.success("Order Delivered", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setTimeout(() => {
            reload(!load);
          }, 5000);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const OrderAcceptance = (id, state) => {
    const sellerID = localStorage.getItem("SellerId");
    const action = true;
    const orderID = id;
    axios
      .post("http://localhost:8080/seller/acceptOrRejectOrder", {
        sellerID: sellerID,
        orderID: orderID,
        action: action,
      })
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          toast.success("Order Accepted", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setTimeout(() => {
            reload(!load);
          }, 5000);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    setdelivered(true);
    for (var key in expandDiv) {
      expandDiv[key] = true;
    }
    setExpandDiv({
      ...expandDiv,
      ["div" + id]: state,
    });
    // console.log(id + " Order Accepted")
  };
  const OrderRejection = (id) => {
    const sellerID = localStorage.getItem("SellerId");
    const orderID = id;
    const action = false;
    // console.log(id + " Order Rejected")
    axios
      .post("http://localhost:8080/seller/acceptOrRejectOrder", {
        sellerID: sellerID,
        orderID: orderID,
        action: action,
      })
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          toast.success("Order Rejected", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setTimeout(() => {
            reload(!load);
          }, 5000);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <div className={classes.OuterContainer}>
        <SellerHeader />
        <div className={classes.ButtonContainer}>
          <button
            className={classes.ActiveClass}
            onClick={NavigateNext}
            type="button"
          >
            Dashboard
          </button>
          <button className={classes.SecondButton} type="button">
            Orders
          </button>
        </div>
        <div className={classes.HeaderContainer}>
          <p>Pending Orders</p>
        </div>
        {Empty ? (
          <div className={classes.EmptyContainer}>
            <p>No Orders Currently</p>
          </div>
        ) : !UI && Object.keys(MenuOrders).length !== 0 ? (
          <div className={classes.CardContainer}>
            {MenuOrders.orders.map((ele1) => {
              return (
                <div className={classes.InnerCardContainer} key={ele1._id}>
                  <div className={classes.LeftContainer}>
                    {ele1.dishes.map((ele) => {
                      return (
                        <div className={classes.MenuContainer}>
                          <p>
                            {ele.dishName} x {ele.dishQty}
                          </p>
                        </div>
                      );
                    })}
                    <div className={classes.TotalContainer}>
                      <p> Total Amount: Rs {ele1.totalCost}</p>
                    </div>
                  </div>
                  <div className={classes.RightContainer}>
                    <div className={classes.NameContainer}>
                      <p>{ele1.consumerName}</p>
                      <i class="fa-solid fa-address-card"></i>
                    </div>
                    <div className={classes.MobileContainer}>
                      <p>{ele1.consumerPhoneNo}</p>
                      <i class="fa-solid fa-mobile-button"></i>
                    </div>
                    <div className={classes.ButtonContainerInner}>
                      {(delivered && expandDiv["div" + ele1._id]) ||
                      ele1.orderStatus === "Prepairing" ? (
                        <div className={classes.DeliveredButton}>
                          <button
                            type="button"
                            onClick={() => {
                              MarkDelivered(ele1._id);
                            }}
                          >
                            Mark as Delivered
                          </button>
                        </div>
                      ) : (
                        <>
                          <div className={classes.ButtonOneContainer}>
                            <button
                              type="button"
                              onClick={() => {
                                OrderAcceptance(ele1._id, true);
                              }}
                            >
                              Accept Order
                            </button>
                          </div>
                          <div className={classes.ButtonTwoContainer}>
                            <button
                              type="button"
                              onClick={() => {
                                OrderRejection(ele1._id);
                              }}
                            >
                              Reject Order
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>

      {UI ? <Loader /> : null}
    </>
  );
};
export default Orders;
