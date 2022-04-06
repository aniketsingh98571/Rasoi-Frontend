import React, { useEffect, useState } from "react";
import axios from "axios";
import classes from "./SellerDashBoard.module.css";
import SellerHeader from "../SellerHeader/SellerHeader";
import Loader from "./Loader";
const SellerDashBoard = () => {
  const [Speciality, SetSpeciality] = useState({});
  const [UI,setUI]=useState(true)
  useEffect(() => {
    let sellerID = localStorage.getItem("SellerId");
    console.log(sellerID);
     axios
    .get("http://localhost:8080/seller/sellerDashboard", {
      params: {
        sellerID: sellerID,
      },
    })
    .then(function (response) {
      console.log(response);
     
        setUI(false)
     
      
      SetSpeciality(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
    }, []);
  
  const NavigateNext = () => {
    window.location.href = "/Orders";
  };
  return (
   <>
   {
     !UI&&Object.keys(Speciality).length !== 0?
    <div className={classes.OuterContainer}>
      {console.log(Speciality)}
      <SellerHeader />

      <div className={classes.ButtonContainer}>
        <button className={classes.ActiveClass} type="button">
          Dashboard
        </button>
        <button
          className={classes.SecondButton}
          onClick={NavigateNext}
          type="button"
        >
          Orders
        </button>
      </div>
      <div className={classes.InnerContainer}>
        <div className={classes.FirstContainer}>
          <div className={classes.ImageContainer}>
            
            <img
              src={`http://localhost:8080/${Speciality.sellerInfo.img}`}
              alt="Seller Image"
            />
          </div>
          <div className={classes.TextContainer}>
            <div className={classes.NameContainer}>
              <i className="fas fa-address-card"></i>
              <p>{Speciality.sellerInfo.name}</p>
            </div>
            <div className={classes.AddressContainer}>
              <i className="fas fa-map-marker-alt"></i>
              <p>
                {Speciality.sellerInfo.areaName}, {Speciality.sellerInfo.pinCode}
              </p>
            </div>
            <div className={classes.MobileContainer}>
              <i className="fas fa-mobile-alt"></i>
              <p>{Speciality.sellerInfo.mobileNo}</p>
            </div>
          </div>
          <div className={classes.SocialContainer}>
            <div className={classes.Iclass}>
              <a href={Speciality.sellerInfo.facebook}>
                {" "}
                <i className="fab fa-facebook"></i>
              </a>
              <a href={Speciality.sellerInfo.instagram}>
                {" "}
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <div className={classes.EditButtonContainer}>
              <button type="button" onClick={()=>{window.location.href="/Edit"}}>Edit Profile</button>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.BioContainer}>
        <div className={classes.BioHeader}>
          <p>BIO</p>
        </div>
        <div className={classes.BioContent}>
          <p>
           {Speciality.sellerInfo.bio}
          </p>
        </div>
      </div>
      <div className={classes.SpecialityContainer}>
        <div className={classes.SpecialityHeader}>
          <p>SPECIALITY</p>
        </div>
        <div className={classes.SpecialDishes}>
          {Speciality.specialDishes.specialDishes.map((ele) => {
            return (
              <div className={classes.SpecialCard} key={ele._id}>
                <div className={classes.SpecialImage}>
                  <img
                    src={`http://localhost:8080/${ele.imageURL}`}
                    alt="Special Image"
                  />
                </div>
                <div className={classes.SpecialText}>
                  <p>{ele.name}</p>
                  <p>{ele.type}</p>
                </div>
                <div className={classes.SpecialTimeContainer}>
                  <p>{ele.timeReq} minutes</p>
                </div>
                <div className={classes.SpecialPriceContainer}>
                  <p>Rs {ele.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={classes.SpecialityContainer}>
        <div className={classes.SpecialityHeader}>
          <p>MENU ITEMS</p>
        </div>
        <div className={classes.SpecialDishes}>
          {Speciality.generalDishes.generalDishes.map((ele) => {
            return (
              <div className={classes.SpecialCard} key={ele._id}>
                <div className={classes.SpecialImage}>
                  <img
                    src={`http://localhost:8080/${ele.imageURL}`}
                    alt="General Image"
                  />
                </div>
                <div className={classes.SpecialText}>
                  <p>{ele.name}</p>
                  <p>{ele.type}</p>
                </div>
                <div className={classes.SpecialTimeContainer}>
                  <p>{ele.timeReq} minutes</p>
                </div>
                <div className={classes.SpecialPriceContainer}>
                  <p>Rs {ele.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>:null
}
{UI?<Loader/>:null}
    </>
  );
};
export default SellerDashBoard;
