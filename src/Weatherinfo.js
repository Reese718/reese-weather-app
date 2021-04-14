import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon";

export default function Weatherinfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>
        <FormattedDate date={props.data.date} />
      </h1>
      <div className="row">
        <div className="col-4">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
            <li>{props.data.city}</li>
          </ul>
        </div>
        <div className="col-4">
          <WeatherIcon code={props.data.icon} alt={props.data.description} />
        </div>
        <div className="col-4">
          <h2>{Math.round(props.data.temperature)}</h2>
          <p>Feels Like {Math.round(props.data.feelsLike)}°</p>
        </div>
      </div>
    </div>
  );
}
