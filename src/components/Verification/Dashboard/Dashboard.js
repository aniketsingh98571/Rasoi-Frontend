import React from "react";
import Heading from "../Heading/Heading";
import RequestCard from "./RequestCard";
import VerificationHeader from "./VerificationHeader/VerificationHeader";

const Dashboard = () => {
  // useEffect(() => {
  //   axios.get('http://localhost:8080/seller/getSellerConfig', {
  //           params: {
  //             sellerID: sellerID
  //           }
  //         })
  //         .then(function (response) {
  //           setResponse({generalDishesCount:response.data.generalDishesCount,
  //               message:response.data.message,mobileNo:response.data.mobileNo,sellerName:response.data.sellerName,specialDishesCount:response.data.specialDishesCount});
  //         })
  //         .catch(function (error) {
  //           if(error.response.status===403){
  //               localStorage.removeItem('SellerId')
  //               window.location.href="/SellerSignIn"
  //           }
  //           if(error.response.status===409){
  //               window.location.href="/SellerSignUp"
  //           }
  //         })
  //   //eslint-disable-next-line
  // }, [])

  const requests = [
    {
      sellerName: "Aniket Singh",
      sellerMobile: 1234567890,
      sellerPan:
        "https://images.news18.com/ibnlive/uploads/2021/07/1625318976_pan.jpg?impolicy=website&width=510&height=356",
      sellerImg:
        "https://e7.pngegg.com/pngimages/586/85/png-clipart-suit-formal-wear-costume-free-dress-passport-pull-material-black-and-white-notched-lapel-suit-jacket-miscellaneous-blue.png",
      sellerID: 98765,
    },
    {
      sellerName: "Dhanshree Shimpi",
      sellerMobile: 1234567890,
      sellerPan:
        "https://images.news18.com/ibnlive/uploads/2021/07/1625318976_pan.jpg?impolicy=website&width=510&height=356",
      sellerImg:
        "https://e7.pngegg.com/pngimages/586/85/png-clipart-suit-formal-wear-costume-free-dress-passport-pull-material-black-and-white-notched-lapel-suit-jacket-miscellaneous-blue.png",
      sellerID: 98764,
    },
    {
      sellerName: "Pushkar Khadase",
      sellerMobile: 1234567890,
      sellerPan:
        "https://images.news18.com/ibnlive/uploads/2021/07/1625318976_pan.jpg?impolicy=website&width=510&height=356",
      sellerImg:
        "https://e7.pngegg.com/pngimages/586/85/png-clipart-suit-formal-wear-costume-free-dress-passport-pull-material-black-and-white-notched-lapel-suit-jacket-miscellaneous-blue.png",
      sellerID: 98763,
    },
    {
      sellerName: "Somesh Lad",
      sellerMobile: 1234567890,
      sellerPan:
        "https://images.news18.com/ibnlive/uploads/2021/07/1625318976_pan.jpg?impolicy=website&width=510&height=356",
      sellerImg:
        "https://e7.pngegg.com/pngimages/586/85/png-clipart-suit-formal-wear-costume-free-dress-passport-pull-material-black-and-white-notched-lapel-suit-jacket-miscellaneous-blue.png",
      sellerID: 98762,
    },
  ];
  return (
    <div>
      <VerificationHeader />
      <Heading />
      {requests.map((seller) => {
        return (
          <RequestCard
            key={seller.sellerID}
            sellerName={seller.sellerName}
            sellerMobile={seller.sellerMobile}
            sellerPan={seller.sellerPan}
            sellerImg={seller.sellerImg}
            sellerID={seller.sellerID}
          />
        );
      })}
    </div>
  );
};

export default Dashboard;
