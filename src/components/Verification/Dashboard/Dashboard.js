import React, { useEffect, useState } from "react";
import Heading from "../Heading/Heading";
import RequestCard from "./RequestCard";
import VerificationHeader from "./VerificationHeader/VerificationHeader";
import axios from "axios";

const Dashboard = () => {
  const [req, setReq] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/validator/getAllNonVadidatedSeller")
      .then(function (response) {
        // console.log(response);
        setReq(response.data.sellers);
      })
      .catch(function (error) {
        console.log(error);
      });
    //eslint-disable-next-line
  }, []);
  const getUpdated=()=>{
    axios
      .get("http://localhost:8080/validator/getAllNonVadidatedSeller")
      .then(function (response) {
        console.log(response);
        setReq(response.data.sellers);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // const requests = [
  //   {
  //     sellerName: "Aniket Singh",
  //     sellerMobile: 1234567890,
  //     sellerPan:
  //       "https://images.news18.com/ibnlive/uploads/2021/07/1625318976_pan.jpg?impolicy=website&width=510&height=356",
  //     sellerImg:
  //       "https://e7.pngegg.com/pngimages/586/85/png-clipart-suit-formal-wear-costume-free-dress-passport-pull-material-black-and-white-notched-lapel-suit-jacket-miscellaneous-blue.png",
  //     sellerID: 98765,
  //   },
  //   {
  //     sellerName: "Dhanshree Shimpi",
  //     sellerMobile: 1234567890,
  //     sellerPan:
  //       "https://images.news18.com/ibnlive/uploads/2021/07/1625318976_pan.jpg?impolicy=website&width=510&height=356",
  //     sellerImg:
  //       "https://e7.pngegg.com/pngimages/586/85/png-clipart-suit-formal-wear-costume-free-dress-passport-pull-material-black-and-white-notched-lapel-suit-jacket-miscellaneous-blue.png",
  //     sellerID: 98764,
  //   },
  //   {
  //     sellerName: "Pushkar Khadase",
  //     sellerMobile: 1234567890,
  //     sellerPan:
  //       "https://images.news18.com/ibnlive/uploads/2021/07/1625318976_pan.jpg?impolicy=website&width=510&height=356",
  //     sellerImg:
  //       "https://e7.pngegg.com/pngimages/586/85/png-clipart-suit-formal-wear-costume-free-dress-passport-pull-material-black-and-white-notched-lapel-suit-jacket-miscellaneous-blue.png",
  //     sellerID: 98763,
  //   },
  //   {
  //     sellerName: "Somesh Lad",
  //     sellerMobile: 1234567890,
  //     sellerPan:
  //       "https://images.news18.com/ibnlive/uploads/2021/07/1625318976_pan.jpg?impolicy=website&width=510&height=356",
  //     sellerImg:
  //       "https://e7.pngegg.com/pngimages/586/85/png-clipart-suit-formal-wear-costume-free-dress-passport-pull-material-black-and-white-notched-lapel-suit-jacket-miscellaneous-blue.png",
  //     sellerID: 98762,
  //   },
  // ];
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
