import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {

const[ ready, setReady] = useState(false);
const [ temperature, setTemperature] = useState(null);
function handleResponse (response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
}

if (ready) { 
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
      <h1>New York</h1>
      <div className="row">
        <div className="col-4">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="col-4">
          <h2>Icon</h2>
        </div>
        <div className="col-4">
          <h2>47°F</h2>
          <p>Feels Like 34°</p>
        </div>
      </div>
    </div>
);


} else { 
    const apiKey = "0a8b11c35774ba923e07245d959e127d";
  let city = "New York";
  let apiUrl = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  
  return(
      brooklyn
  );

}








