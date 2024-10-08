import { useEffect, useState } from "react";
import "./App.css";
import { fetch } from "./api/weatherApi";
import CurrentWeather from "./CurrentWeather/CurrentWeather";
import ForcastForDays from "./ForcastForDays/ForcastForDays";
import { backgroundChanger } from "./helperFunc";
import WeatherLocation from "./CurrentWeather/WeatherLocation/WeatherLocation";

function App() {
  const [weather, setWeather] = useState([]);
  const [forecast, setForcast] = useState([]);
  const [forcastDays, setForcastDays] = useState([]);
  const [input, setInput] = useState("");
  const [currentLocation, setCurrentLocation] = useState([]);

  function setLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      setCurrentLocation([position.coords.latitude, position.coords.longitude]);
    });
  }
  useEffect(() => {
    setLocation();
  }, []);
  // if (weather.length === 0) {
  //   let apiCurrent = `http://api.weatherapi.com/v1/forecast.json?key=5d7a30752e994d888ac151004240510&q=${currentLocation[0]} ${currentLocation[1]}&days=1&aqi=no&alerts=no`;
  //   let forecarsAPI = `http://api.weatherapi.com/v1/forecast.json?key=5d7a30752e994d888ac151004240510&q=${currentLocation[0]} ${currentLocation[1]}&days=1&aqi=no&alerts=no`;
  //   let sevenDaysAPI = `http://api.weatherapi.com/v1/forecast.json?key=5d7a30752e994d888ac151004240510&q=${currentLocation[0]} ${currentLocation[1]}&days=7&aqi=no&alerts=no`;
  //   fetch(apiCurrent, setWeather);
  //   fetch(forecarsAPI, setForcast);
  //   fetch(sevenDaysAPI, setForcastDays);
  // }

  const onClickHendler = () => {
    let apiCurrent = `http://api.weatherapi.com/v1/forecast.json?key=5d7a30752e994d888ac151004240510&q=${input}&days=1&aqi=no&alerts=no`;
    let forecarsAPI = `http://api.weatherapi.com/v1/forecast.json?key=5d7a30752e994d888ac151004240510&q=${input}&days=1&aqi=no&alerts=no`;
    let sevenDaysAPI = `http://api.weatherapi.com/v1/forecast.json?key=5d7a30752e994d888ac151004240510&q=${input}&days=7&aqi=no&alerts=no`;
    fetch(apiCurrent, setWeather);
    fetch(forecarsAPI, setForcast);
    fetch(sevenDaysAPI, setForcastDays);
  };
  return (
    <>
      <WeatherLocation setInput={setInput} onClickHendler={onClickHendler} />
      <div
        style={{ backgroundImage: `url(${backgroundChanger(weather)})` }}
        className="currentWeatherDiv"
      >
        <CurrentWeather weather={weather} forecast={forecast} />
        <ForcastForDays forcastDays={forcastDays} />
      </div>
    </>
  );
}

export default App;
