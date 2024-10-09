export const backgroundChanger = (weather) => {
  if (weather.current?.condition.text === "Overcast") {
    return "weatherApp/public/assets/sky-1107579_1920.webp";
  } else if (weather.current?.condition.text === "Partly cloudy") {
    return "weatherApp/public/assets/PartlyCloudy2.webp";
  } else if (weather.current?.condition.text === "Mist") {
    return "weatherApp/public/assets/mist.jpg";
  } else if (weather.current?.condition.text === "Sunny") {
    return "weatherApp/public/assets/Sunny.jpeg";
  } else if (weather.current?.condition.text === "Clear") {
    return "weatherApp/public/assets/clear.jpg";
  } else if (weather.current?.condition.text === "Moderate rain") {
    return "weatherApp/public/assets/moderateRain.webp";
  } else if (weather.current?.condition.text === "Torrential rain shower") {
    return "weatherApp/public/assets/rainShower.jpg";
  } else if (weather.current?.condition.text === "Partly Cloudy") {
    return "weatherApp/public/assets/PartlyCloudy2.webp";
  } else if (weather.current?.condition.text === "Patchy rain nearby") {
    return "weatherApp/public/assets/moderateRain.webp";
  } else if (weather.current?.condition.text === "Light rain") {
    return "weatherApp/public/assets/moderateRain.webp";
  }
};
