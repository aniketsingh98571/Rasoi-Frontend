import React, { useEffect, useState } from "react";
import Heading from "../Heading/Heading";
import RequestCard from "./RequestCard";
import VerificationHeader from "./VerificationHeader/VerificationHeader";
import axios from "axios";

const Dashboard = () => {
  const [req, setReq] = useState([]);

  useEffect(() => {
    // console.log("Mai useeffect hu");
    axios
      .get("http://localhost:8080/validator/getAllNonVadidatedSeller")
      .then(function (response) {
        // console.log(response);
        setReq(response.data.sellers);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const getUpdated = (sellerID) => {
    const updatedReq = req.filter((r) => {
      return r.id !== sellerID;
    });
    setReq(updatedReq);
  };

  return (
    <div>
      <VerificationHeader />
      <Heading />
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
