import React, { useEffect, useState } from "react";
import classes from "./SellerFirst.module.css";
import logo from "../../assets/images/logo.png";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../SellerDashboard/Loader";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Modal from "react-modal";

const SellerFirst = () => {
  const [checkValid, setCheckValid] = useState({
    special: false,
    general: false,
  });
  const [UI,setUI]=useState(true)
  const [isSpecial, SetIsSpecial] = useState(false);
  const SetSpecial = (e) => {
    SetIsSpecial(!isSpecial);
  };
  const [change, setchange] = useState(false);
  const [Done, SetDone] = useState({
    FormFirst: false,
    FormSecond: 0,
  });

  const [response, setResponse] = useState({
    generalDishesCount: 0,
    message: "",
    mobileNo: "",
    sellerName: "",
    specialDishesCount: 0,
  });

  const [ModalOpen, SetModalOpen] = useState(false);

  const [FirstForm, SetFirstForm] = useState({
    ProfilePic: "",
    bio: "",
    facebook: "",
    instagram: "",
    areaName: "",
    pinCode: "",
  });
  const [SecondForm, SetSecondForm] = useState({
    dishName: "",
    price: "",
    dishType: "Veg",
    timeReq: "",
    Picture: "",
  });
  useEffect(() => {
    let sellerID = localStorage.getItem("SellerId");
    // console.log(sellerID)
    // console.log(sellerID);
    if(sellerID===null){
      window.location.href="/SellerSignIn"
    }

    axios
      .get("http://localhost:8080/seller/getSellerConfig", {
        params: {
          sellerID: sellerID,
        },
      })
      .then(function (response) {
        // console.log(response);
        setUI(false)
        setResponse({
          generalDishesCount: response.data.generalDishesCount,
          message: response.data.message,
          mobileNo: response.data.mobileNo,
          sellerName: response.data.sellerName,
          specialDishesCount: response.data.specialDishesCounts,
        });
      })
      .catch(function (error) {
        if (error.response.status === 403) {
          localStorage.removeItem("SellerId");
          toast.warn("Seller Not Authorized", {
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
            window.location.href = "/SellerSignIn";
          }, 2000);
        }
        if (error.response.status === 409) {
          toast.warn("Dashboard Already Filled", {
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
            window.location.href = "/SellerDashboard";
          }, 2000);
        }
      });
  }, [change]);

  const SecondFormHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    SetSecondForm({ ...SecondForm, [name]: value });
  };
  const FoodPicHandler = (e) => {
    SetSecondForm({ ...SecondForm, Picture: e.target.files[0] });
  };
  const FirstFormHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    SetFirstForm({ ...FirstForm, [name]: value });
  };
  const ProfilePicHandler = (e) => {
    SetFirstForm({ ...FirstForm, ProfilePic: e.target.files[0] });
    toast.success(`Picture added successfully`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const DoneHandler = () => {
    // console.log(Done.FormFirst);
    // console.log(Done.FormSecond);
    if (Done.FormFirst === true && Done.FormSecond === 1) {
      // console.log("Dashboard filled");
      SetModalOpen(true);
    } else {
      toast.warn("Please fill out fields marked with *", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      // console.log("Please fill out form first");
    }
  };
  const NavigateNext = () => {
    window.location.href = "/SellerDashboard";
    setchange(true);
  };
  const StopNavigation = () => {
    SetModalOpen(false);
  };
  const InnerForm = (e) => {
    e.preventDefault();
    // console.log("InnerForm");

    if (
      SecondForm.dishName &&
      SecondForm.price &&
      SecondForm.Picture &&
      SecondForm.timeReq
    ) {
      const InnerFormData = new FormData();
      // console.log(isSpecial);
      // console.log(SecondForm);
      InnerFormData.append("dishName", SecondForm.dishName);
      InnerFormData.append("price", SecondForm.price);
      InnerFormData.append("dishType", SecondForm.dishType);
      InnerFormData.append("isSpecial", isSpecial);
      InnerFormData.append("timeReq", SecondForm.timeReq);
      InnerFormData.append("picture", SecondForm.Picture);
      InnerFormData.append("sellerID", localStorage.getItem("SellerId"));

      // console.log(SecondForm)
      // console.log(isSpecial)

      axios
        .post("http://localhost:8080/seller/addDishes", InnerFormData)
        .then((res) => {
          // console.log(res);
          // console.log(SecondForm)

          //    console.log(SecondForm)
          //Server response for genaralized/specialized dish
          //if 1 and all the other required fields in first form are filled then
          //done activate else done not activate.
          if (res.status === 201) {
            toast.success(`${SecondForm.dishName} added successfully`, {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });

            SetDone({ FormFirst: Done.FormFirst, FormSecond: 1 });
            SetSecondForm({
              dishName: "",
              price: "",
              timeReq: "",
              dishType: "Veg",
            });
            document.getElementById("FoodPicId").value = "";
          }
        })
        .catch((err) => {
          // console.log(err);
          if (
            err.response.data.message === "all special dishes slots are full"
          ) {
            toast.warn(
              "Your Last Dish was not saved in our database due to max limit reached!",
              {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              }
            );

            setCheckValid({ special: true, general: checkValid.general });
            SetSecondForm({
              dishName: "",
              price: "",
              timeReq: "",
              dishType: "Veg",
            });
            document.getElementById("FoodPicId").value = "";
            SetIsSpecial(false);
          }
          if (
            err.response.data.message === "all Normal dishes slots are full"
          ) {
            // console.log("full");
            toast.warn(
              "Your Last Dish was not saved in our database due to max limit reached!",
              {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              }
            );

            setCheckValid({ special: checkValid.special, general: true });
            SetSecondForm({
              dishName: "",
              price: "",
              timeReq: "",
              dishType: "Veg",
            });
            document.getElementById("FoodPicId").value = "";
            SetIsSpecial(true);
            document.getElementById("CheckBoxId").checked = true;
            document.getElementById("CheckBoxId").disabled = true;
          }
        });
    } else {
      toast.warn("Please Fill out all fields market with *", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  const OuterForm = (e) => {
    e.preventDefault();
    // console.log("Outer Form");

    if (FirstForm.areaName && FirstForm.pinCode && FirstForm.ProfilePic) {
      const OuterFormData = new FormData();
      OuterFormData.append("Picture", FirstForm.ProfilePic);
      OuterFormData.append("bio", FirstForm.bio);
      OuterFormData.append("facebook", FirstForm.facebook);
      OuterFormData.append("instagram", FirstForm.instagram);
      OuterFormData.append("areaName", FirstForm.areaName);
      OuterFormData.append("pinCode", FirstForm.pinCode);
      OuterFormData.append("sellerID", localStorage.getItem("SellerId"));

      axios
        .put("http://localhost:8080/seller/fillSellerDetails", OuterFormData)
        .then((res) => {
          // console.log(res);
          if (res.status === 200) {
            toast.success("Seller Info Saved Successfully", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
            SetDone({ FormFirst: true, FormSecond: Done.FormSecond });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      toast.warn("Please Fill out all fields marked with *", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <>
    {
       !UI&&Object.keys(response).length !== 0?
    <div className={classes.OuterContainer}>
      <Modal
        isOpen={ModalOpen}
        className={classes.Modal}
        overlayClassName={classes.OverlayClass}
      >
        <div className={classes.ModalContainer}>
          <div className={classes.ConfirmContainer}>
            <p>Are you sure you want to Submit?</p>
            <p>
              Note: After submitting you will be redirected to your Dashboard
            </p>
          </div>
          <div className={classes.ConfirmButtonContainer}>
            <button
              className={classes.ButtonOne}
              onClick={NavigateNext}
              type="button"
            >
              YES
            </button>

            <button
              className={classes.ButtonTwo}
              onClick={StopNavigation}
              type="button"
            >
              No
            </button>
          </div>
        </div>
      </Modal>
      <div className={classes.NavContainer}>
        <div className={classes.LogoContainer}>
          <img src={logo} alt="Rasoi" />
        </div>

        <div className={classes.WelComeText}>
          <p>
            <span className={classes.Welcome}> Welcome</span>,{" "}
            {response.sellerName}!
          </p>
        </div>
      </div>
      <div className={classes.ProfileText}>
        <p>Let's Setup Your Profile First!</p>
      </div>

      <div className={classes.FormContainer}>
        <div className={classes.LeftForm}>
          <form onSubmit={OuterForm} encType="multipart/form-data">
            <div className={classes.ProfilePicContainer}>
              <div className={classes.ProfileContainerText}>
                <p>PROFILE PICTURE</p>
              </div>
              <div className={classes.ProfileInput}>
                <label htmlFor="ProfileInputId">
                  <div className={classes.LabelContainer}>
                    <i className="fas fa-upload"></i>
                    <p>Upload Image</p>
                  </div>
                </label>
                <input
                  className={classes.FileInput}
                  type="file"
                  id="ProfileInputId"
                  name="ProfilePic"
                  onChange={ProfilePicHandler}
                  accept=".png,.jpg,.jpeg"
                />
              </div>
            </div>
            <div className={classes.NameContainer}>
              <div className={classes.NameText}>
                <p>Name*</p>
              </div>
              <div className={classes.NameInput}>
                <input
                  type="text"
                  name="Name"
                  value={response.sellerName}
                  readOnly
                />
              </div>
            </div>
            <div className={classes.MobileContainer}>
              <div className={classes.MobileText}>
                <p>Mobile*</p>
              </div>
              <div className={classes.MobileInput}>
                <input
                  type="number"
                  name="Mobile"
                  value={response.mobileNo}
                  readOnly
                />
              </div>
            </div>
            <div className={classes.BioContainer}>
              <div className={classes.BioText}>
                <p>Bio</p>
              </div>
              <div className={classes.BioInput}>
                <textarea
                  name="bio"
                  value={FirstForm.bio}
                  onChange={FirstFormHandler}
                />
              </div>
            </div>
            <div className={classes.SocialContainer}>
              <div className={classes.SocialText}>
                <p>SOCIAL MEDIA</p>
              </div>
              <div className={classes.FaceBookContainer}>
                <i className="fab fa-facebook"></i>
                <input
                  title="https://www.facebook.com/thor98571/   thor98571--->Username"
                  type="text"
                  placeholder="Facebook Username"
                  name="facebook"
                  value={FirstForm.facebook}
                  onChange={FirstFormHandler}
                />
              </div>
              <div className={classes.InstagramContainer}>
                <i className="fab fa-instagram"></i>
                <input
                  title="https://www.instagram.com/dsc_sitrc/   dsc_strc--->Username"
                  type="text"
                  placeholder="Instagram Username"
                  name="instagram"
                  value={FirstForm.instagram}
                  onChange={FirstFormHandler}
                />
              </div>
            </div>
            <div className={classes.InnerButton}>
              <input type="submit" value="SAVE DETAILS" />
            </div>
          </form>
        </div>

        <div className={classes.RightForm}>
          <div className={classes.FirstContainer}>
            <div className={classes.FirstContainerText}>
              <p>ADDRESS DETAILS</p>
            </div>
            <div className={classes.FirstContainerInput}>
              <div className={classes.StreetAddress}>
                <div className={classes.StreetAddressText}>
                  <p>Street Address*</p>
                </div>
                <div className={classes.StreetAddressInput}>
                  <input
                    type="text"
                    name="areaName"
                    value={FirstForm.areaName}
                    onChange={FirstFormHandler}
                  />
                </div>
              </div>
              <div className={classes.PinCodeContainer}>
                <div className={classes.PinCodeText}>
                  <p>Pincode*</p>
                </div>
                <div className={classes.PinCodeInput}>
                  <input
                    type="number"
                    name="pinCode"
                    value={FirstForm.pinCode}
                    onChange={FirstFormHandler}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={classes.SecondContainer}>
            <div className={classes.MenuText}>
              <p>MENU ITEMS</p>
            </div>
            <div className={classes.SecondFormContainer}>
              <form onSubmit={InnerForm} encType="multipart/form-data">
                <div className={classes.Wrapper}>
                  <div className={classes.FirstForm}>
                    <div className={classes.FoodNameContainer}>
                      <div className={classes.FoodNameText}>
                        <p>Name of the Food*</p>
                      </div>
                      <div className={classes.FoodNameInput}>
                        <input
                          type="text"
                          name="dishName"
                          value={SecondForm.dishName}
                          onChange={SecondFormHandler}
                        />
                      </div>
                    </div>
                    <div className={classes.TypeContainer}>
                      <div className={classes.TypeText}>
                        <p>Type*</p>
                      </div>
                      <div className={classes.TypeInput}>
                        <select
                          name="dishType"
                          value={SecondForm.dishType}
                          onChange={SecondFormHandler}
                        >
                          <option value="Veg">Veg</option>
                          <option value="Non-Veg">Non-Veg</option>
                        </select>
                      </div>
                    </div>
                    {response.specialDishesCount === 3 ||
                    checkValid.special === true ? (
                      <p className={classes.SpecialMessage}>
                        Max Speciality Count Reached
                      </p>
                    ) : (
                      <div className={classes.CheckContainer}>
                        <input
                          name="isSpecial"
                          id="CheckBoxId"
                          defaultChecked={isSpecial}
                          onChange={SetSpecial}
                          type="checkbox"
                        />
                        <label>Mark as Speciality</label>
                        <p>*You can add upto 3 special items</p>
                      </div>
                    )}
                  </div>
                  <div className={classes.SecondForm}>
                    <div className={classes.PriceContainer}>
                      <div className={classes.PriceText}>
                        <p>Price*</p>
                      </div>
                      <div className={classes.PriceInput}>
                        <input
                          type="number"
                          name="price"
                          value={SecondForm.price}
                          onChange={SecondFormHandler}
                        />
                      </div>
                    </div>
                    <div className={classes.TimeContainer}>
                      <div className={classes.TimeText}>
                        <p>Time to Cook (in minutes)*</p>
                      </div>
                      <div className={classes.TimeInput}>
                        <input
                          type="number"
                          min="30"
                          max="240"
                          name="timeReq"
                          value={SecondForm.timeReq}
                          onChange={SecondFormHandler}
                        />
                      </div>
                    </div>
                    <div className={classes.FoodImageContainer}>
                      <div className={classes.FoodImageText}>
                        <p>Upload your Food Picture*</p>
                      </div>
                      <div className={classes.FoodImageInput}>
                        <input
                          type="file"
                          id="FoodPicId"
                          name="Picture"
                          accept=".png,.jpg,.jpeg"
                          onChange={FoodPicHandler}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {(response.generalDishesCount === 10 ||
                  checkValid.general === true) &&
                checkValid.special === true ? (
                  <p className={classes.SpecialMessage}>
                    Max Menu Items Count Reached
                  </p>
                ) : (
                  <div
                    className={
                      response.generalDishesCount === 10
                        ? classes.HideAddButton
                        : classes.FirstButton
                    }
                  >
                    <input type="submit" value="ADD ITEM" />
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.OuterButton}>
        <button id="SubmitButtonId" type="button" onClick={DoneHandler}>
          Submit
        </button>
      </div>
      <ToastContainer />
      </div>
    :null
}
{UI?<Loader/>:null}
    </>
  );
};
export default SellerFirst;
