import React from "react";
import "./Forecast.css";

export default function ({ forecast }) {
  return (
    <>
      <div className="forcastHours">
        {forecast.forecast?.forecastday["0"].hour.map((hour, index) => (
          <div className="hourInfo" key={index}>
            <p>{hour.time.slice(11)}</p>
            <img src={hour.condition.icon} alt="" />
            <p className="hour">{hour.temp_c.toFixed(0)} °C</p>
          </div>
        ))}
      </div>
    </>
  );
}
