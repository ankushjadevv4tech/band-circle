import axios from "axios";

const GEOCODECLIENT_API_URL = 'https://api-bdc.net/data/reverse-geocode-client'

export const fetchLocation = async (lat, lng) => {
  try {
    const response = await axios.get(`${GEOCODECLIENT_API_URL}?latitude=${lat}&longitude=${lng}`);
    return response?.data.city || "City not found";
  } catch (error) {
    console.error("Error while fetching city:", error);
    return "Error in retrieving city";
  }
};