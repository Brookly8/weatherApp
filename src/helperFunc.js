export const backgroundChanger = (weather) => {
  if (weather.current?.condition.text === "Overcast") {
    return "https://c.stocksy.com/a/CI7600/z9/1458004.jpg";
  } else if (weather.current?.condition.text === "Partly cloudy") {
    return "https://cloudfront-us-east-1.images.arcpublishing.com/gmg/UFTCQMOSTVA23C5VSVD2RY37E4.jpg";
  } else if (weather.current?.condition.text === "Mist") {
    return "https://plus.unsplash.com/premium_photo-1675826774700-bda8f88f2bd2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWlzdHxlbnwwfHwwfHx8MA%3D%3D";
  } else if (weather.current?.condition.text === "Sunny") {
    return "https://s7d2.scene7.com/is/image/TWCNews/1031_nc_sunny_weather_2-1";
  } else if (weather.current?.condition.text === "Clear") {
    return "https://s7d2.scene7.com/is/image/TWCNews/1031_nc_sunny_weather_2-1";
  } else if (weather.current?.condition.text === "Moderate rain") {
    return "https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/images/weather/learn-about/weather/rain-storm.jpg";
  } else if (weather.current?.condition.text === "Torrential rain shower") {
    return "https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/images/weather/learn-about/weather/rain-storm.jpg";
  } else if (weather.current?.condition.text === "Partly Cloudy") {
    return "https://cloudfront-us-east-1.images.arcpublishing.com/gmg/UFTCQMOSTVA23C5VSVD2RY37E4.jpg";
  } else if (weather.current?.condition.text === "Patchy rain nearby") {
    return "https://cloudfront-us-east-1.images.arcpublishing.com/gmg/UFTCQMOSTVA23C5VSVD2RY37E4.jpg";
  } else if (weather.current?.condition.text === "Light rain") {
    return "https://s7d2.scene7.com/is/image/TWCNews/0622_n13_light_rain";
  }
};
