import axios from "axios";

const MUSICBRAINZ_API_URL='https://musicbrainz.org/ws/2/artist'

export const fetchBands = async (
  cityName, pageNum = 0, itemsPerPage = 50, setBands, setBandCount
) => {
  try {
    setBandCount(0);
    setBands([]);

    if (!cityName) return;

    const response = await axios.get(MUSICBRAINZ_API_URL, {
      params: {
        query: `area:${cityName.trim()} AND type:group AND begin:[${new Date().getFullYear() - 10} TO *]`,
        fmt: "json", limit: itemsPerPage, offset: pageNum,
      },
    });
    setBandCount(response.data.count);
    setBands(response.data.artists);
  } catch (error) {
    console.error("Error fetching bands:", error);
  }
};
