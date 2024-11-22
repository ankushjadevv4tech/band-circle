# BandScout App

BandScout is a web application designed to help users discover musical bands based on their city or any specified location. Leveraging the power of the [MusicBrainz](https://musicbrainz.org/) API, BandScout provides a seamless and user-friendly interface for searching and exploring band information.

---

## Features 🚀

🌍 **Location-Based Search**
🌐 Automatically detects the user's current location or allows manual entry of a city name for band searches.

🎵 **Band Listing**
📋 Displays a paginated list of bands associated with the specified location, ensuring smooth navigation through large datasets.

🖌️ **Modern and Responsive UI**
🎨 Built with Tailwind css to deliver a consistent, clean, and fully responsive interface.

🔗 **Seamless API Integration**
📡 Leverages the MusicBrainz API to fetch accurate and up-to-date band information.

---

## Prerequisites

**Node.js** (version 14 or above)
**npm** or **yarn**
An active internet connection to fetch data from APIs.

---

## Getting Started 🏁

1. **Clone the Repository**:
   https://github.com/ankushjadevv4tech/band-scout.git
   cd band-scout
2. **Install Dependencies**:
   npm install
   # or
   yarn install
3. **Run the Application**:
   npm start
   # or
   yarn start
   The app will be available at http://localhost:3000.

---

## Technologies Used

**Frontend**: React, Tailwind
**API**: MusicBrainz API, Geolocation API
**State Management**: React Hooks (useState, useEffect)
**HTTP Requests**: Axios

---

## How It Works

1. When application loads:

   - it tries to retrieve the user's geolocation. 
   - If successful, it determines the user's city and automatically searches for bands in that location.
   - In case of geolocation failure, a fallback API provides a default city for the search.

2. Users can manually search for bands by entering a city name in the search bar.

3. Bands data is displayed.

---

## API References 📚

**[MusicBrainz API](https://musicbrainz.org/doc/Development/XML_Web_Service/Version_2)**

