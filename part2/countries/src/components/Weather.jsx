import React from "react";

const Weather = ({ capital, wData }) => {
  if (!wData) return <div>data missing</div>;

  if (wData !== 0) {
    const icon = wData.weather_icons;
    // const desc = wData.weather_descriptions;
    return (
      <div>
        <h2>Weather in {capital}</h2>

        <div>
          <strong>temperature:</strong>
          {wData.temperature}℃
        </div>
        <div>
          <img alt="weather_icon" src={icon}>
            {/* {desc} */}
          </img>
        </div>
        <div>
          <strong>wind:</strong>
          {wData.wind_speed} mph direction {wData.wind_dir}
        </div>
      </div>
    );
  }
};

export default Weather;
