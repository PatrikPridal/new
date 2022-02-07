import React from "react";

import "./Forecast.css";

export default function Forecast({ weatherInfo, date }) {
  return (
    <div>
      <h1 className='Forecast__title'>{[date[0], date[1]]}</h1>
      <img
        className='Forecast__weather-icon'
        src={
          "https://openweathermap.org/img/wn/" +
          weatherInfo.weather[0].icon +
          ".png"
        }
        alt={weatherInfo.weather[0].main}
      />
      <div className="Forecast__temperature">
          <span className="temperature__max">
              {Math.round(weatherInfo.temp.max)}
              <sup className="temperature__symbol">°</sup>
              </span>
              </div>
    </div>
  );
}
