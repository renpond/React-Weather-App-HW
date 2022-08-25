import React, { useState } from "react";
import Weather from "./Weather";

import "./SearchCity.css";

export default function SearchCity() {
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (city.length > 0) {
      setMessage(<Weather city={city} />);
    } else {
      setMessage("");
    }
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="SearchEngine">
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Please enter a city..."
          onChange={updateCity}
          className="searchBar"
        />
        <input type="submit" value="search" className="searchButton" />
        <h2>{message}</h2>
      </form>
    </div>
  );
}
