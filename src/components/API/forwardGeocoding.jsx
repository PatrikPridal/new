import axios from "axios";

// geolokace uživatele
async function getCoordinatesOfAddress(address) {
  const response = await axios.get(
    "https://api.opencagedata.com/geocode/v1/json? ",
    {
      params: {
        key: "cd0db568911444229f6e598f266e0e09",
        q: address,
        language: "cs"
        
      }
    }
  );

  return response;
}

export default getCoordinatesOfAddress;