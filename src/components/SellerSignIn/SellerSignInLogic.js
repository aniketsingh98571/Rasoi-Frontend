import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const SellerSignInLogic = () => {
  const [Sellerlog, SetSellerlog] = useState({
    mobileNo: "",
    password: "",
  });
  const HandleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    SetSellerlog({ ...Sellerlog, [name]: value });
  };
  const SubmitHandler = (e) => {
    e.preventDefault();
    if (Sellerlog.mobileNo && Sellerlog.password) {
      axios
        .post("http://localhost:8080/seller/signin", Sellerlog)
        .then((res) => {
          if (res.status === 200 && res.data.configured === false) {
            toast.success("Login Successful", {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
            console.log(res);
            localStorage.setItem("SellerId", res.data.seller_ID);
            SetSellerlog({ mobileNo: "", password: "" });

            setTimeout(() => {
              window.location.href = "/SellerSetUp";
            }, 2000);
          } else if (res.status === 200 && res.data.configured === true) {
            toast.success("Login Successful", {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
            localStorage.setItem("SellerId", res.data.seller_ID);
            setTimeout(() => {
              window.location.href = "/SellerDashboard";
            }, 2000);
          }
        })
        .catch((err) => {
          if (err.response.status === 404) {
            toast.error("Seller does not exist", {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }
          if (err.response.status === 401) {
            toast.error("Invalid Credentials", {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }
          if (err.response.status === 403) {
            toast.error("Seller is Not Validated", {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }
          if (err.response.status === 422) {
            toast.error("Either Mobile Number and Password not entered", {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }
        });
    } else
      toast.warn("Please Fill out all fields", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
  };
  return { Sellerlog, HandleInput, SubmitHandler };
};
export default SellerSignInLogic;
