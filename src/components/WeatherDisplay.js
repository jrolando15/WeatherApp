import React from 'react';

const WeatherDisplay = ({ data, renderIcon }) => {
  if (!data || !data.weather || !data.main) {
    return <p>No weather data available</p>;
  }

  return (
    <div className="text-center">
      <h2>{data.name}</h2>
      {renderIcon(data.weather[0].main)}
      <p>Temperature: {data.main.temp}°C</p>
      <p>Weather: {data.weather[0].description}</p>
      <p>Humidity: {data.main.humidity}%</p>
    </div>
  );
};

export default WeatherDisplay;


