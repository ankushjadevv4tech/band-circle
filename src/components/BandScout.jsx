import { useEffect, useState } from "react";
import BandContent from "./BandContent";

import { getLocation } from "../services/locationService";
import { fetchBands } from "../services/fetchBandsService";

export default function BandScout() {
  const [bands, setBands] = useState([]);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [bandCount, setBandCount] = useState(0);

  const handleSearch = async (city, page = 0, limit = 50) => {
    setLoading(true);
    await fetchBands(city, page, limit, setBands, setBandCount);
    setLoading(false);
  };

  useEffect(() => {
    const getUserLocation = async() => {
      await getLocation(setLocation);
    }

    getUserLocation();
    if (!location) return;

    setLocation(location);
    handleSearch(location);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Band Finder</h1>
      </header>

      <div className="space-y-8">
        <div className="flex items-center space-x-4 mb-4">
          <input
            type="text"
            placeholder="Enter city"
            value={location || ''}
            onChange={(e) => setLocation(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter")
                handleSearch(location, 0, 50);
              }}
            className="border border-black-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-black-500"
          />
          <button
            onClick={() => handleSearch(location, 0, 50)}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Search
          </button>
        </div>

        <BandContent
          totalBands={bandCount}
          bandData={bands}
          loading={loading}
          onSearch={handleSearch}
          city={location}
        />
      </div>
    </div>
  );
}
