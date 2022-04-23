import React, { useEffect, useState } from "react";
import Heading from "../Heading/Heading";
import RequestCard from "./RequestCard";
import VerificationHeader from "./VerificationHeader/VerificationHeader";
import axios from "axios";
import classes from "./Dashboard.module.css";
import Loader from "../../Loader/Loader";

const Dashboard = () => {
  const [req, setReq] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("verifierId") === null) {
      window.location.href = "/verificationLogin";
    } else {
      setLoading(true);
      // console.log("Mai useeffect hu");
      axios
        .get("http://localhost:8080/validator/getAllNonVadidatedSeller", {
          params: {
            validatorUsername: "Somesh Lad",
          },
        })
        .then(function (response) {
          // console.log(response);
          setReq(response.data.sellers);
        })
        .catch(function (error) {
          console.log(error);
        });
      setLoading(false);
    }
  }, []);

  const getUpdated = (sellerID) => {
    const updatedReq = req.filter((r) => {
      return r.id !== sellerID;
    });
    setReq(updatedReq);
  };

  return (
    <div>
      {loading && <Loader />}
      <VerificationHeader />
      <Heading />
      {req.length === 0 && (
        <p className={classes.Empty}>No Requests to display!</p>
      )}
      {req.map((seller) => {
        return (
          <RequestCard
            key={seller.id}
            sellerName={seller.name}
            sellerMobile={seller.mobileNo}
            sellerPan={seller.panImage}
            sellerImg={seller.personalImage}
            sellerID={seller.id}
            Update={getUpdated}
          />
        );
      })}
    </div>
  );
};

export default Dashboard;
