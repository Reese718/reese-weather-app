import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function Weatherinfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div className="row">
        <div className="col-4">
          <ul>
            <li className="Date">
              <FormattedDate date={props.data.date} />
            </li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
        <div className="col-4">
          <WeatherIcon code={props.data.icon} alt={props.data.description} />
          <h4 className="text-capitalize">{props.data.description}</h4>
        </div>
        <div className="col-4">
          <WeatherTemperature farenheit={props.data.temperature} />

          <p>Feels Like {Math.round(props.data.feelsLike)}°</p>
        </div>
      </div>
    </div>
  );
}
