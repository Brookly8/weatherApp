export const backgroundChanger = (weather) => {
  if (weather.current?.condition.text === "Overcast") {
    return "/src/assets/sky-1107579_1920.webp";
  } else if (weather.current?.condition.text === "Partly cloudy") {
    return "/src/assets/PartlyCloudy2.webp";
  } else if (weather.current?.condition.text === "Mist") {
    return "/src/assets/mist.jpg";
  } else if (weather.current?.condition.text === "Sunny") {
    return "/src/assets/Sunny.jpeg";
  } else if (weather.current?.condition.text === "Clear") {
    return "/src/assets/clear.jpg";
  } else if (weather.current?.condition.text === "Moderate rain") {
    return "/src/assets/moderateRain.webp";
  } else if (weather.current?.condition.text === "Torrential rain shower") {
    return "/src/assets/rainShower.jpg";
  } else if (weather.current?.condition.text === "Partly Cloudy") {
    return "/src/assets/PartlyCloudy2.webp";
  }else if (weather.current?.condition.text === "Patchy rain nearby") {
    return "/src/assets/moderateRain.webp";
  }
};
