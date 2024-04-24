import React,  {useState } from "react";
import "./WeatherBar.css";
import axios from 'axios';

function WeatherBar() {
  const [weatherData, setWeatherData] = useState();
  const [city, setCity] = useState('');

  const fetchData = async (data) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=bf80ccd5f0dc737079f714a64682b436`);
      console.log("res",response.data);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };
  const handleInputChange = (e) => {
    setCity(e.target.value);
  };
  function showData(){
    fetchData(city);
  }
  return (
    <div className="container">
      <p className="para">Weather App</p>
      <div className="main">
        <div className="button-folder">
          <input type="text" className="input" placeholder="Enter city" value={city} onChange={handleInputChange} />
          <button className="button" onClick={() => showData()}>Search</button>
        </div>
        <div className="textpart">
          <table>
            <tbody>
              <tr>
                <td>Temperature:</td>
                <td>{weatherData?.main?.temp} K</td>
              </tr>
              <tr>
                <td>Humidity:</td>
                <td>{weatherData?.main?.humidity}</td>
              </tr>
              <tr>
                <td>Wind Speed:</td>
                <td>{weatherData?.wind?.speed} m/sec</td>
              </tr>
            </tbody>
          </table>
          </div>
      </div>
    </div>
  );
}

export default WeatherBar;
