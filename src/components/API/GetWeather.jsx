import axios from "axios";

async function getWeatherAndForecast(coordinates) {
    const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/onecall?",
        {
            params: {
                lang: "cz",
                lat: coordinates.lat,
                lon: coordinates.lng,
                exclude: "minutely,hourly,alerts",
                appid: "6557810176c36fac5f0db536711a6c52",
                units: "metric"
            }
        }
    );

    return response;
}

export default getWeatherAndForecast;