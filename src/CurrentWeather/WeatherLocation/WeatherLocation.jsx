import React from "react";
import "./WeatherLocation.css";

export default function WeatherLocation({ setInput, onClickHendler }) {
  const inputText = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="locationSearch">
      <input
        onChange={(e) => inputText(e)}
        type="text"
        placeholder="US Zipcode, UK Postcode, Canada Postalcode, IP address, Latitude/Longitude (decimal degree) or city name"
      />
      <button onClick={() => onClickHendler()}>Search</button>
    </div>
  );
}
