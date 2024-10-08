import axios from "axios";

export const fetch = async (api, setWeather) => {
  try {
    const { data } = await axios(api);
    setWeather((prev) => data);
  } catch (error) {
    console.log(error);
  }
};
