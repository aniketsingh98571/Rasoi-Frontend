import React, { useState } from "react";
import classes from "./VerificationLogin.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const VerificationLogin = () => {
  const [VerifierLog, setVerifierLog] = useState({
    username: "",
    password: "",
  });
  let navigate = useNavigate();

  const HandleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setVerifierLog({ ...VerifierLog, [name]: value });
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    if (VerifierLog.username && VerifierLog.password) {
      axios
        .post("http://13.89.1.212/validator/signin", VerifierLog)
        .then((res) => {
          console.log(res);
          localStorage.setItem("verifierId", res.data.validatorID);
          toast.success("Login Successfull!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          navigate("/verification");
        })
        .catch((err) => {
          toast.error("Invalid Credentials!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          console.log(err);
        });
    } else alert("Please fill all the details");
  };

  return (
    <div className={classes.Container}>
      <div className={classes.LoginText}>
        <p>Login</p>
      </div>

      <div className={classes.LogInForm}>
        <div className={classes.UsernameContainer}>
          <div className={classes.UsernameText}>
            <p>Username</p>
          </div>
          <div className={classes.UsernameInput}>
            <input
              type="text"
              name="username"
              value={VerifierLog.username}
              onChange={HandleInput}
            />
          </div>
        </div>
        <div className={classes.PasswordContainer}>
          <div className={classes.PasswordText}>
            <p>Password</p>
          </div>
          <div className={classes.PasswordInput}>
            <input
              type="password"
              name="password"
              value={VerifierLog.password}
              onChange={HandleInput}
            />
          </div>
        </div>
      </div>
      <div className={classes.ButtonContainer}>
        <div className={classes.ButtonContainer1}>
          <button type="button" onClick={SubmitHandler}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerificationLogin;
