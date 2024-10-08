import React from "react";
import "./ForcastForDays.css";

export default function ForcastForDays({ forcastDays }) {
  return (
    <>
      <div className="line"></div>
      <div className="forcastDaysDiv">
        {forcastDays.forecast?.forecastday.map((day, index) => {
          return (
            <div key={index} className="dayInfo">
              <p>{day.date}</p>
              <img src={day.day.condition.icon} alt="" />
              <p>{day.day.avgtemp_c.toFixed(0)} °C</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
