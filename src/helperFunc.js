export const backgroundChanger = (weather) => {
  if (weather.current?.condition.text === "Overcast") {
    return "/assets/sky-1107579_1920.webp";
  } else if (weather.current?.condition.text === "Partly cloudy") {
    return "/assets/PartlyCloudy2.webp";
  } else if (weather.current?.condition.text === "Mist") {
    return "/assets/mist.jpg";
  } else if (weather.current?.condition.text === "Sunny") {
    return "/assets/Sunny.jpeg";
  } else if (weather.current?.condition.text === "Clear") {
    return "/assets/clear.jpg";
  } else if (weather.current?.condition.text === "Moderate rain") {
    return "/assets/moderateRain.webp";
  } else if (weather.current?.condition.text === "Torrential rain shower") {
    return "/assets/rainShower.jpg";
  } else if (weather.current?.condition.text === "Partly Cloudy") {
    return "/assets/PartlyCloudy2.webp";
  } else if (weather.current?.condition.text === "Patchy rain nearby") {
    return "/assets/moderateRain.webp";
  } else if (weather.current?.condition.text === "Light rain") {
    return "/assets/moderateRain.webp";
  }
};
