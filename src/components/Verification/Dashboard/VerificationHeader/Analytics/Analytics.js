import React, { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip, Cell } from "recharts";
import Loader from "../../../../Loader/Loader";
import VerificationHeader from "../VerificationHeader";
import axios from "axios";
import classes from "./Analytics.module.css";
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos((-midAngle * Math.PI) / 180);
  const y = cy + radius * Math.sin((-midAngle * Math.PI) / 180);

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
const Analytics = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  useEffect(() => {
    // console.log("Mai useeffect hu");
    axios
      .get("https://rasoibackendresourcehandlerserver.azurewebsites.net/validator/analytics", {
        params: {
          validatorUsername: "Somesh Lad",
        },
      })
      .then(function (response) {
        // console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    setLoading(false);
  }, []);
  const data01 = [
    { name: "Validated", value: data.validatedSellers },
    { name: "Rejected", value: data.rejectedSeller },
    { name: "Pending", value: data.pendingSeller },
  ];
  const COLORS = ["#019267", "#FD5D5D", "#2FA4FF"];
  return (
    <>
      {loading && <Loader />}
      <VerificationHeader />
      <div className={classes.heading}>
        Lets have a look at the statistics about the Seller Validation and
        Rejection:
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
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
        <div className={classes.LegendContainer}>
          <div className={classes.AcceptContainer}>
            <div className={classes.AcceptColor}></div>
            <p>Validated Sellers</p>
          </div>
          <div className={classes.RejectContainer}>
            <div className={classes.RejectColor}></div>
            <p>Rejected Sellers</p>
          </div>
          <div className={classes.PendingContainer}>
            <div className={classes.PendingColor}></div>
            <p>Pending Sellers</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
