import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const SellerFirstLogic = () => {
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
    isSpecial: false,
    timeReq: "",
    Picture: "",
  });

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
      InnerFormData.append("dishName", SecondForm.dishName);
      InnerFormData.append("price", SecondForm.price);
      InnerFormData.append("dishType", SecondForm.dishType);
      InnerFormData.append("isSpecial", SecondForm.isSpecial);
      InnerFormData.append("timeReq", SecondForm.timeReq);
      InnerFormData.append("picture", SecondForm.Picture);
      InnerFormData.append("sellerID", localStorage.getItem("SellerId"));

      axios
        .post("http://104.43.237.82/seller/addDishes", InnerFormData)
        .then((res) => {
          console.log(res);
          SetSecondForm({ dishName: "", price: "", timeReq: "" });
          //Server response for genaralized/specialized dish
          //if 1 and all the other required fields in first form are filled then
          //done activate else done not activate.
          if (res.status === 201) {
            console.log("wow")
            toast.success("Dish Added Successfully", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
            SetDone({ FormFirst: Done.FormFirst, FormSecond: 1 });
          }
        })
        .catch((err) => {
          console.log(err);
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
        .put("http://104.43.237.82/seller/fillSellerDetails", OuterFormData)
        .then((res) => {
          console.log(res);
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
  return {
    response,
    ModalOpen,
    FirstForm,
    SecondForm,
    FirstFormHandler,
    SecondFormHandler,
    FoodPicHandler,
    ProfilePicHandler,
    NavigateNext,
    OuterForm,
    InnerForm,
    DoneHandler,
    StopNavigation,
    setResponse,
  };
};
export default SellerFirstLogic;
