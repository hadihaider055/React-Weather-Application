import React, { useState, useEffect } from "react";
import "./style.css";

function MainScreen() {
  const [weather, setWeather] = useState("");
  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(
        "https://api.weatherapi.com/v1/forecast.json?key=6ddd119f56d242a1a8c192625211408&q=Pakistan&days=1&aqi=yes&alerts=yes"
      );
      const data = await response.json();
      console.log(data.current.temp_c);
      setWeather(data.current.temp_c);
    };
    fetchApi();
  }, [2000]);
  return (
    <div className="main__screen__container">
      <h1 className="main__heading">Weather Application</h1>

      <div className="container__body">
        <input
          type="text"
          className="input__main__screen"
          placeholder="Enter City Name"
        />
        <button type="submit" className="main__screen__btn">
          Search
        </button>
      </div>
    </div>
  );
}

export default MainScreen;
