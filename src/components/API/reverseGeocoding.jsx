import axios from "axios";

async function getAddressOfCoordinates(lat, lng) {
  const response = await axios.get(
    "https://api.opencagedata.com/geocode/v1/json? ",
    {
      params: {
        key: "cd0db568911444229f6e598f266e0e09",
        q: `${lat}+${lng}`,
        language: "cs"
      }
    }
  );

  return response;
}

export default getAddressOfCoordinates;