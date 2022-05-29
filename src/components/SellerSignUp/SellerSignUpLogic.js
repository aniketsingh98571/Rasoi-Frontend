import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
const SellerSignUpLogic = () => {
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
    else {
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
      // console.log("All okay");

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
            panImage: "",
            profileImage: null,
          });
          SetConfirmPass("");
          document.getElementById("PanImageId").value = "";
          document.getElementById("ProfileImageId").value = "";
          if (res.status === 201) {
            toast.success(
              "Seller Registered,Please wait for your account to be verified",
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
        .catch((err) => {
          if (err.response.status === 403) {
            toast.error("Seller Already Exists", {
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
          if (err.response.status === 406) {
            toast.error("Please enter mobile no and name", {
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
            toast.error("Image format not supported", {
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
    }
    setTimeout(() => {
      SetMessage("");
      document.getElementById("mobileId").innerHTML = "";
      document.getElementById("passId").innerHTML = "";
    }, 2000);
  };
  return {
    ConsumerRegistration,
    ConfirmPass,
    ErrorMessage,
    HandleInput,
    HandleFileInput1,
    HandleFileInput2,
    SetConfirmPass,
    SubmitHandler,
    ConfirmPassword,
  };
};
export default SellerSignUpLogic;
