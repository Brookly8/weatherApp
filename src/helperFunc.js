export const backgroundChanger = (weather) => {
  if (weather.current?.condition.text === "Overcast") {
    return "/weatherApp/src/assets/sky-1107579_1920.webp";
  } else if (weather.current?.condition.text === "Partly cloudy") {
    return "/weatherApp/src/assets/PartlyCloudy2.webp";
  } else if (weather.current?.condition.text === "Mist") {
    return "/weatherApp/src/assets/mist.jpg";
  } else if (weather.current?.condition.text === "Sunny") {
    return "/weatherApp/src/assets/Sunny.jpeg";
  } else if (weather.current?.condition.text === "Clear") {
    return "/weatherApp/src/assets/clear.jpg";
  } else if (weather.current?.condition.text === "Moderate rain") {
    return "/weatherApp/src/assets/moderateRain.webp";
  } else if (weather.current?.condition.text === "Torrential rain shower") {
    return "/weatherApp/src/assets/rainShower.jpg";
  } else if (weather.current?.condition.text === "Partly Cloudy") {
    return "/weatherApp/src/assets/PartlyCloudy2.webp";
  } else if (weather.current?.condition.text === "Patchy rain nearby") {
    return "/weatherApp/src/assets/moderateRain.webp";
  }
};
