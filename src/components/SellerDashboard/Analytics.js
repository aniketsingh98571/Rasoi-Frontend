import React,{useEffect,useState} from "react"
import { PieChart, Pie, Legend, Tooltip, Cell } from "recharts";
import classes from './Analytics.module.css'
import SellerHeader from "../SellerHeader/SellerHeader";
import axios from "axios";
import Loader from "./Loader";
const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
    const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);
  
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
const Analytics=()=>{
    const [data,setdata]=useState({})
    const [UI,setUI]=useState(true)
    useEffect(()=>{
        const sellerID=localStorage.getItem("SellerId")
        axios
        .get("http://localhost:8080/seller/analytics", {
          params: {
            sellerID: sellerID,
          },
        })
        .then(function (response) {
          console.log(response);
        // setUI(false)
        // SetSpeciality(response.data);
        setUI(false)
        setdata(response.data)
        })
        .catch(function (error) {
          console.log(error);
        });
    },[])
    const data01 = [
        { name: "Accepted", value: data.accepted },
        { name: "Rejected", value: data.rejected },
        {name:"Pending",value:data.pending}
];
      const COLORS = ["#019267", "#FD5D5D","#2FA4FF"];
    //   const RADIAN = ;
      
    return(
        <>
        {
         !UI&&Object.keys(data).length !== 0?
      <div className={classes.OuterContainer}>
          <SellerHeader/>
            <div className={classes.ButtonContainer}>
        <button className={classes.ActiveClass} 
        type="button"
        onClick={()=>window.location.href="/SellerDashboard"}
        >
          Dashboard
        </button>
        <button
          className={classes.SecondButton}
          onClick={()=>window.location.href="/Orders"}
          type="button"
        >
          Orders
        </button>
       <button type="button" className={classes.ThirdButton} onClick={()=>window.location.href="/"}>
         Analytics
       </button>
        
      </div>
      <div className={classes.TextContainer}>
          <p>Lets have a look at your performance till now:</p>
      </div>
       <div className={classes.Container}>
          <PieChart width={400} height={400} className={classes.Add}>
      <Pie
        data={data01}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
      >
        {data01.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip/>
    </PieChart>
    <div className={classes.LegendContainer}>
     <div className={classes.AcceptContainer}>
            <div className={classes.AcceptColor}>
            </div>
            <p>Accepted Orders</p>
     </div>
     <div className={classes.RejectContainer}>
         <div className={classes.RejectColor}></div>
         <p>Rejected Orders</p>
     </div>
     <div className={classes.PendingContainer}>
         <div className={classes.PendingColor}></div>
         <p>Pending Orders</p>
     </div>
    </div>
       </div>
       </div>:null
}
{UI?<Loader/>:null}
       </>
        
    )
}
export default Analytics;