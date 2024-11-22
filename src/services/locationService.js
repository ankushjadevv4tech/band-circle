import axios from "axios";
import { fetchLocation } from "./fetchLocationService"; // Adjust path if needed

const GEOJS_API_URL = 'https://get.geojs.io/v1/ip/geo.json'

export const getLocation = async (setLocation) => {
  try {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const cityName = await fetchLocation(pos.coords.latitude, pos.coords.longitude);
        setLocation(cityName);
      },
      async () => {
        const fallbackResponse = await axios.get(GEOJS_API_URL);
        const fallbackCity = fallbackResponse.data.city;
        setLocation(fallbackCity);
      }
    );
  } catch (error) {
    console.error("Error in fetching location:", error);
  }
};
