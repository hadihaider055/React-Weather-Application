import React, { useState, useEffect } from "react";
import Axios from "axios";

import "./style.css";
import WeatherScreen from "../Weather Screen";

function MainScreen() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const search = async (e: any) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`
    );
    setWeather(`${Math.floor(response?.data?.main?.temp - 273)}°C`);
    setCity("");
  };

  return (
    <div className="main__screen__container">
      <h1>{weather}</h1>
      <h1 className="main__heading">Weather Application</h1>
      <form onSubmit={search}>
        <div className="container__body">
          <input
            type="text"
            className="input__main__screen"
            placeholder="Enter City Name"
            value={city}
            onChange={(evt: any) => setCity(evt.target.value)}
            required
          />
          <button type="submit" className="main__screen__btn" accessKey="r">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default MainScreen;
