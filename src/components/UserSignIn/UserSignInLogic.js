import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const UserSignInLogic = () => {
  const [Consumerlog, SetConsumerlog] = useState({
    mobileNo: "",
    password: "",
  });
  const HandleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    SetConsumerlog({ ...Consumerlog, [name]: value });
  };
  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log(Consumerlog);
    if (Consumerlog.mobileNo && Consumerlog.password) {
      axios
        .post("http://localhost:8080/consumer/login", Consumerlog)
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            toast.success("Login Successful", {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            localStorage.setItem("ConsumerId", response.data.consumerID);
            window.location.href = "/Home";
            SetConsumerlog({ mobileNo: "", password: "" });
          }
        })
        .catch(function (error) {
          if (error.response.status === 401 || error.response.status === 403) {
            toast.error("Mobile Number or Password Incorrect", {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            SetConsumerlog({ mobileNo: "", password: "" });
          }
        });
    } else
      toast.warn("Please fill out all fields", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  };
  return { Consumerlog, HandleInput, SubmitHandler };
};
export default UserSignInLogic;
