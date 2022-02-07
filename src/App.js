import { useState, useEffect } from 'react';
import './App.css';
import Header from "./components/Header";
import WeatherAndForecast from "./components/WeatherAndForecast";
import ArtBy from './components/ArtBy';
import Loader from "./components/Loader";
import Warning from './components/Warning';
import getCoordinatesOfAddress from "./components/API/forwardGeocoding";
import getAddressOfCoordinates from "./components/API/reverseGeocoding";
import getWeatherAndForecast from './components/API/GetWeather';


function App() {
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({});
  const [weatherAndForecastInfo, setWeatherAndForecastInfo] = useState({});
  const [locationInfo, setLocationInfo] = useState({});
  const [contentState, setContentState] = useState("blank");

  function searchCity(target) {
    setAddress(target);
  }

  function showWarning() {
    setContentState("warning");
    setTimeout(() => setContentState("blank"), 3000);
  }

  useEffect(() => {
    function makeRequest(position) {
      setContentState("loading");
      getAddressOfCoordinates(
        position.coords.latitude,
        position.coords.longitude
      )
        .then((res) => {
          setLocationInfo({
            city: res.data.results[0].components.city_district,
            town: res.data.results[0].components.town,
            state: res.data.results[0].components.state_code,
            country: res.data.results[0].components.country_code
          });
        })
        .then(() =>
          setCoordinates({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          })
        )
        .catch((error) => showWarning());
    }

    function catchError(err) {
      alert("ERROR(" + err.code + "): " + err.message);
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(makeRequest, catchError);
    } else {
      alert("Geolokace není podporována tímto prohlížečem.");
    }
  }, []);

  useEffect(() => {
    if (address === "") return;

    setContentState("loading");
    getCoordinatesOfAddress(address)
      .then((res) => {
        if (
          res.data.results.length === 0 ||
          (res.data.results[0].components.city === undefined &&
            res.data.results[0].components.town === undefined)
        ) {
          showWarning();
          return;
        }

        setCoordinates(res.data.results[0].geometry);
        setLocationInfo({
          city: res.data.results[0].components.city,
          town: res.data.results[0].components.town,
          state: res.data.results[0].components.state_code,
          country: res.data.results[0].components.country_code
        });
      })
      .catch((error) => showWarning());
  }, [address]);

  useEffect(() => {
    if (Object.keys(coordinates).length === 0) return;

    getWeatherAndForecast(coordinates)
      .then((res) => {
        setWeatherAndForecastInfo(res.data);
        setContentState("weatherAndForecast");
      })
      .catch((error) => showWarning());
  }, [coordinates]);

  const Main = {
    blank: () => null,
    loading: () => <Loader />,
    warning: () => <Warning />,
    weatherAndForecast: () => (
      <WeatherAndForecast
        weatherInfo={weatherAndForecastInfo}
        location={locationInfo}
      />
    )
  };

  return (
    <div className="App">
      <div className="App__container">
        <>
          <Header searchCity={searchCity} />
          {Main[contentState]()}
        </>
        <ArtBy />
      </div>
    </div>
  );
}

export default App;
