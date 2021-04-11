import React, {useState} from "react";
import FormattedDate from "./FormattedDate.js";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      city: response.data.name,
      feelsLike: response.data.main.feels_like,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="search-form"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <h1>
          <FormattedDate date={weatherData.date} />
        </h1>
        <div className="row">
          <div className="col-4">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} km/h</li>
              <li></li>
            </ul>
          </div>
          <div className="col-4">
            <h2>Icon</h2>
          </div>
          <div className="col-4">
            <h2>{Math.round(weatherData.temperature)}</h2>
            <p>Feels Like {Math.round(weatherData.feelsLike)}°</p>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "0a8b11c35774ba923e07245d959e127d";

    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading";
  }
}
