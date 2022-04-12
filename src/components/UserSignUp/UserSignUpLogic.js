import { useState } from "react";
import { toast } from "react-toastify";
const UserSignUpLogic = () => {
  const [ConsumerRegistration, SetConsumerRegistration] = useState({
    name: "",
    address: "",
    mobileNo: "",
    password: "",
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
  const SubmitHandler = (e) => {
    e.preventDefault();

    if (
      ConsumerRegistration.address &&
      ConsumerRegistration.mobileNo &&
      ConsumerRegistration.name &&
      ConsumerRegistration.password &&
      ConfirmPass
    ) {
      // console.log("filled");
    } else {
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
    }

    if (ConsumerRegistration.mobileNo.length !== 10) {
      document.getElementById("MobileId").innerHTML = "Invalid Mobile Length";
      SetConsumerRegistration({
        name: ConsumerRegistration.name,
        address: ConsumerRegistration.address,
        mobileNo: "",
        password: ConsumerRegistration.password,
      });
    }

    if (ConsumerRegistration.password.length < 5) {
      document.getElementById("PswrdId").innerHTML =
        "Password Length too short";
      SetConsumerRegistration({
        name: ConsumerRegistration.name,
        address: ConsumerRegistration.address,
        mobileNo: ConsumerRegistration.mobileNo,
        password: "",
      });
    }

    if (ConsumerRegistration.password !== ConfirmPass) {
      SetMessage("Password do not Match");
      SetConfirmPass("");
    } else if (
      ConsumerRegistration.password === ConfirmPass &&
      ConsumerRegistration.password.length > 5 &&
      ConsumerRegistration.mobileNo.length === 10 &&
      ConsumerRegistration.address &&
      ConsumerRegistration.mobileNo &&
      ConsumerRegistration.name &&
      ConsumerRegistration.password &&
      ConfirmPass
    ) {
      // console.log("All okay");
      fetch("http://localhost:8080/consumer/signup", {
        method: "POST", // or 'PUT'
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ConsumerRegistration),
      })
        .then((response) => {
          response.json(); //status 403=user already exists.
          SetConsumerRegistration({
            name: "",
            address: "",
            mobileNo: "",
            password: "",
          });
          SetConfirmPass("");
          if (response.status === 403) {
            toast.error("User Already Exists", {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          } else if (response.status === 201) {
            toast.success(
              "User Registered, please login with your credentials",
              {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              }
            );
          }
        })
        .then((data) => {})
        .catch((error) => {
          console.error("Error:", error);
        });
    }
    setTimeout(() => {
      SetMessage("");
      document.getElementById("PswrdId").innerHTML = "";
      document.getElementById("MobileId").innerHTML = "";
    }, 2000);
  };

  return {
    ConsumerRegistration,
    HandleInput,
    ConfirmPass,
    ConfirmPassword,
    ErrorMessage,
    SubmitHandler,
  };
};
export default UserSignUpLogic;
