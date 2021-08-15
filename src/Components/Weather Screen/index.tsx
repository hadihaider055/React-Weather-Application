import Cloudy from "../../Assets/perfect-day.svg";
import "./style.css";
const WeatherScreen = () => {
  return (
    <div className="weatherscreen__container">
      <div className="ws__container__head">
        <h3>React Weather Application</h3>
      </div>
      <div className="weather__region">
        <h1>London</h1>
      </div>
      <div className="ws__container__body">
        <div className="container__weatherInfo">
          <h2>30&deg;C</h2>
          <h6>|</h6>
          <h6>Cloudy</h6>
        </div>
        <div className="container__weatherImg">
          <img src={Cloudy} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WeatherScreen;
