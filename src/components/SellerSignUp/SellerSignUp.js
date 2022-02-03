import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./SellerSignUp.module.css";
import axios from "axios";

const SellerSignUp = () => {
  const [ConsumerRegistration, SetConsumerRegistration] = useState({
    sellerName: "",
    mobileNo: "",
    password: "",
    panImage: null,
    profileImage: null,
  });

  const [ConfirmPass, SetConfirmPass] = useState("");
  const [ErrorMessage, SetMessage] = useState("");

  const HandleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    SetConsumerRegistration({ ...ConsumerRegistration, [name]: value });
  };
  const ConfirmPassword = (e) => {
    SetConfirmPass(e.target.value);
  };
  const HandleFileInput1 = (e) => {
    SetConsumerRegistration({
      ...ConsumerRegistration,
      panImage: e.target.files[0],
    });
  };
  const HandleFileInput2 = (e) => {
    SetConsumerRegistration({
      ...ConsumerRegistration,
      profileImage: e.target.files[0],
    });
  };
  const SubmitHandler = (e) => {
    e.preventDefault();
    if (
      ConsumerRegistration.mobileNo &&
      ConsumerRegistration.sellerName &&
      ConsumerRegistration.password &&
      ConsumerRegistration.panImage &&
      ConsumerRegistration.profileImage &&
      ConfirmPass
    )
      console.log("hi");
    else alert("Please fill all details");

    if (ConsumerRegistration.mobileNo.length !== 10) {
      document.getElementById("mobileId").innerHTML =
        "Enter valid Mobile Number";
      SetConsumerRegistration({
        sellerName: ConsumerRegistration.sellerName,
        mobileNo: "",
        password: ConsumerRegistration.password,
        panImage: ConsumerRegistration.panImage,
        profileImage: ConsumerRegistration.profileImage,
      });
    }

    if (ConsumerRegistration.password.length < 5) {
      document.getElementById("passId").innerHTML = "Password too short";
      SetConsumerRegistration({
        sellerName: ConsumerRegistration.sellerName,
        mobileNo: ConsumerRegistration.mobileNo,
        password: "",
        panImage: ConsumerRegistration.panImage,
        profileImage: ConsumerRegistration.profileImage,
      });
    }

    if (ConsumerRegistration.password !== ConfirmPass) {
      SetMessage("Password do not Match");
      SetConfirmPass("");
    } else if (
      ConsumerRegistration.sellerName &&
      ConsumerRegistration.mobileNo &&
      ConsumerRegistration.password &&
      ConsumerRegistration.profileImage &&
      ConsumerRegistration.panImage &&
      ConfirmPass &&
      ConsumerRegistration.password === ConfirmPass &&
      ConsumerRegistration.mobileNo.length === 10 &&
      ConsumerRegistration.password.length > 5
    ) {
      console.log("All okay");

      const formData = new FormData();
      formData.append("sellerName", ConsumerRegistration.sellerName);
      formData.append("mobileNo", ConsumerRegistration.mobileNo);
      formData.append("password", ConsumerRegistration.password);
      formData.append("panImage", ConsumerRegistration.panImage);
      formData.append("profileImage", ConsumerRegistration.profileImage);
      axios
        .post("http://localhost:8080/seller/signup", formData)
        .then((res) => {
          console.log(res);
          SetConsumerRegistration({
            sellerName: "",
            mobileNo: "",
            password: "",
            panImage: null,
            profileImage: null,
          });
          SetConfirmPass("");
        })
        .catch((err) => {
          if (err.response.status === 403) console.log("Seller Already Exists");
        });
    }
    setTimeout(() => {
      SetMessage("");
      document.getElementById("mobileId").innerHTML = "";
      document.getElementById("passId").innerHTML = "";
    }, 2000);
  };
  return (
    <div className={classes.Container}>
      <div className={classes.InnerContainer}>
        <div className={classes.SignUpText}>
          <p>Sign Up</p>
        </div>
      </div>
      <form onSubmit={SubmitHandler} encType="multipart/form-data">
        <div className={classes.ConsumerForm}>
          <div className={classes.LeftForm}>
            <div className={classes.NameContainer}>
              <div className={classes.NameText}>
                <p>Name</p>
              </div>
              <div className={classes.NameInput}>
                <input
                  type="text"
                  name="sellerName"
                  value={ConsumerRegistration.sellerName}
                  onChange={HandleInput}
                />
              </div>
            </div>
            <div className={classes.Password}>
              <div className={classes.PasswordText}>
                <p>Password</p>
              </div>
              <div className={classes.PasswordInput}>
                <input
                  type="password"
                  name="password"
                  value={ConsumerRegistration.password}
                  onChange={HandleInput}
                />
                <p id="passId"></p>
              </div>
            </div>
            <div className={classes.PanCardContainer}>
              <div className={classes.PanText}>
                <p>Upload Pan Card</p>
              </div>
              <div className={classes.PanInput}>
                <input
                  id={1}
                  accept=".jpeg,.png,.jpg"
                  type="file"
                  name="panImage"
                  onChange={HandleFileInput1}
                />
              </div>
            </div>
          </div>
          <div className={classes.RightForm}>
            <div className={classes.MobileNumber}>
              <div className={classes.MobileText}>
                <p>Mobile Number</p>
              </div>
              <div className={classes.MobileInput}>
                <input
                  type="number"
                  name="mobileNo"
                  value={ConsumerRegistration.mobileNo}
                  onChange={HandleInput}
                />
                <p id="mobileId"></p>
              </div>
            </div>
            <div className={classes.ConfirmPassword}>
              <div className={classes.ConfirmPasswordText}>
                <p>Confirm Password</p>
              </div>
              <div className={classes.ConfirmPasswordInput}>
                <input
                  type="password"
                  name="confirmpassword"
                  value={ConfirmPass}
                  onChange={ConfirmPassword}
                />
                <p>{ErrorMessage}</p>
              </div>
            </div>
            <div className={classes.ProfileContainer}>
              <div className={classes.ProfileText}>
                <p>Upload Profile Picture</p>
              </div>
              <div className={classes.ProfileInput}>
                <input
                  id={2}
                  type="file"
                  accept=".jpeg,.png,.jpg"
                  name="profileImage"
                  onChange={HandleFileInput2}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.SubmitButtonOne}>
          <input type="submit" className={classes.SubmitButton} />
        </div>
      </form>
      <div className={classes.OuterButtonContainer}>
        <div className={classes.ButtonContainer}>
          {/* <button type="button" onClick={SubmitHandler}>Sign Up</button> */}
        </div>
        <div className={classes.SignInText}>
          <p>
            Already have an account?{" "}
            <Link className={classes.LinkEdit} to="/SellerSignIn">
              <span className={classes.SignText}>Sign in</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default SellerSignUp;
