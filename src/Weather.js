import React, { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

import "./Weather.css";

export default function Weather(props) {
  const [loaded, setLoaded] = useState(false);
  let [temperature, setTemperature] = useState("props.temperature");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [icon, setIcon] = useState("");
  let apiKey = "54cb345a2c3729ba77c24984961b3eee";
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;

  function showTemperature(response) {
    setLoaded(true);
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      ` http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  axios.get(apiUrl).then(showTemperature);

  if (loaded) {
    return (
      <div className="Weather">
        <h1>{props.city}</h1>
        <ul>
          <li>Temperature: {Math.round(temperature)}°F</li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {Math.round(wind)}MPH</li>
          <img src={icon} alt="weather icon" />
        </ul>
      </div>
    );
  } else {
    return (
      <ThreeDots
        color="orange"
        height="80"
        width="80"
        radius="9"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    );
  }
}
