import React, { useState, useEffect } from "react";
import Axios from "axios";
import Weather from "./Weather";

const Country = ({ country }) => {
  const [weatherData, setWeatherData] = useState({});
  useEffect(() => {
    const params = {
      access_key: "your_key",
      query: `${country.capital}`,
    };
    Axios.get("http://api.weatherstack.com/current", { params })
      .then((response) => {
        const apiResponse = response.data;
        console.log(apiResponse);
        setWeatherData(apiResponse.current);
        // console.log(response);
        // console.log(
        //   `current temp in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`
        // );
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(weatherData);
  return (
    <div key={country.name}>
      <h1>{country.name}</h1>
      <div>capital {country.capital}</div>
      <div>population {country.population}</div>
      <h2>Spoken languages</h2>
      <ul>
        {country.languages.map((lang, i) => (
          <li key={i}>{lang.name}</li>
        ))}
      </ul>
      <img src={country.flag} width="40%" alt="flag"></img>
      {/* Insert api-key or comment below component to render without error*/}
      <Weather wData={weatherData} capital={country.capital} />
    </div>
  );
};

export default Country;
