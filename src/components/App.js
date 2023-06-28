import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [search, setSearch] = useState("");
  const API_KEY = "15100d2ad439f90085a626acb8b8c6a4";
  const [weatherData, setWeatherData] = useState({});

  function handleEnter(event) {
    if (event.key == "Enter") {
      getWeather();
    }
  }

  function getWeather() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let obj = {
          name: data.name,
          temp: data.main.temp,
          weather: data.weather[0].main,
        };
        console.log("Object", obj);
        setWeatherData(obj);
      });
  }

  return (
    <div>
      {/* Do not remove the main div */}
      <input
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleEnter}
      />
      {weatherData ? (
        <div>
          <h1>{weatherData.name}</h1>
          <h2>{weatherData.temp}</h2>
          <p>{weatherData.weather}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
