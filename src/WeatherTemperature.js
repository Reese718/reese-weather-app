import React, {useState} from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("farenheit");
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function convertToFarenheit(event) {
    setUnit("farenheit");
  }

  if (unit === "farenheit") {
    return (
      <div className="WeatherTemperature">
        <h3>
          {Math.round(props.farenheit)}
          <span className="units">
            °F |{" "}
            <a href="/" onClick={convertToCelsius}>
              {" "}
              °C
            </a>{" "}
          </span>
        </h3>
      </div>
    );
  } else {
    let celsius = ((props.farenheit - 32) * 5) / 9;
    return (
      <div className="WeatherTemperature">
        <h3>
          {Math.round(celsius)}
          <span className="units">
            {" "}
            <a href="/" onClick={convertToFarenheit}>
              {" "}
              °F{" "}
            </a>{" "}
            | °C
          </span>
        </h3>
      </div>
    );
  }
}
