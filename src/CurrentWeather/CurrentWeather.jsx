import React from "react";
import "./CurrentWeather.css";
import Forecast from "../Forecast/Forecast";

export default function CurrentWeather({ weather, forecast }) {
  return (
    <>
      <div className="location">
        <h3>
          {weather.location?.name}, {weather.location?.region}
        </h3>
        <p>{weather.location?.country}</p>
      </div>
      <div className="currentWeather">
        <div className="left">
          <img src={weather.current?.condition.icon} alt="" />
          <p>{weather.current?.condition.text}</p>
          <h1>{weather.current?.temp_c.toFixed(0)} °C,</h1>
          <p>feels like: {weather.current?.feelslike_c.toFixed(0)} °C</p>
        </div>
        <div className="right">
          <p>humidity: {weather.current?.humidity} %</p>
          <p>wind: {weather.current?.wind_kph} kph</p>
          <p>precipitation: {weather.current?.precip_mm} mm</p>
        </div>
        <Forecast forecast={forecast} />
      </div>
    </>
  );
}
