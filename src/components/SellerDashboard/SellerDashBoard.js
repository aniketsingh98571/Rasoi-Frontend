import React, { useEffect, useState } from "react";
import axios from "axios";
import classes from "./SellerDashBoard.module.css";
import SellerHeader from "../SellerHeader/SellerHeader";
const SellerDashBoard = () => {
  const [Speciality, SetSpeciality] = useState({
    img: "",
    name: "",
    bio:"",
    areaName: "",
    pinCode: "",
    mobileNo: "",
    facebook: "",
    instagram: "",
    specialDishes: [],
    generalDishes: [],
  });
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
        SetSpeciality({
          img: response.data.data.img,
          name: response.data.data.name,
          areaName: response.data.data.areaName,
          pinCode: response.data.data.pinCode,
          mobileNo: response.data.data.mobileNo,
          facebook: response.data.data.facebook,
          instagram: response.data.data.instagram,
          specialDishes: response.data.data.specialDishes,
          generalDishes: response.data.data.generalDishes,
          bio:response.data.data.bio
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const NavigateNext = () => {
    window.location.href = "/Orders";
  };
  return (
    <div className={classes.OuterContainer}>
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
              src={`http://localhost:8080/${Speciality.img}`}
              alt="Seller Image"
            />
          </div>
          <div className={classes.TextContainer}>
            <div className={classes.NameContainer}>
              <i className="fas fa-address-card"></i>
              <p>{Speciality.name}</p>
            </div>
            <div className={classes.AddressContainer}>
              <i className="fas fa-map-marker-alt"></i>
              <p>
                {Speciality.areaName}, {Speciality.pinCode}
              </p>
            </div>
            <div className={classes.MobileContainer}>
              <i className="fas fa-mobile-alt"></i>
              <p>{Speciality.mobileNo}</p>
            </div>
          </div>
          <div className={classes.SocialContainer}>
            <div className={classes.Iclass}>
              <a href={Speciality.facebook}>
                {" "}
                <i className="fab fa-facebook"></i>
              </a>
              <a href={Speciality.instagram}>
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
           {Speciality.bio}
          </p>
        </div>
      </div>
      <div className={classes.SpecialityContainer}>
        <div className={classes.SpecialityHeader}>
          <p>SPECIALITY</p>
        </div>
        <div className={classes.SpecialDishes}>
          {Speciality.specialDishes.map((ele) => {
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
          {Speciality.generalDishes.map((ele) => {
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
    </div>
  );
};
export default SellerDashBoard;
