import React, { useState } from 'react';
import SearchBar from './SearchBar';
import WeatherDisplay from './WeatherDisplay';
import DateSelector from './DateSelector';
import { getWeather } from '../services/weatherService';

// Import static SVG icons as React components
import { ReactComponent as CloudIcon } from '../assets/images/weather-icons/cloud.svg';
import { ReactComponent as CloudRainIcon } from '../assets/images/weather-icons/cloud-rain.svg';
import { ReactComponent as CloudHeavyRainIcon } from '../assets/images/weather-icons/cloud-heavy-rain.svg';
import { ReactComponent as CloudLightningIcon } from '../assets/images/weather-icons/cloud-lightning.svg';
import { ReactComponent as CloudLightningRainIcon } from '../assets/images/weather-icons/cloud-lightning-rain.svg';
import { ReactComponent as CloudSnowIcon } from '../assets/images/weather-icons/cloud-snow.svg';
import { ReactComponent as CloudSnowHeavyIcon } from '../assets/images/weather-icons/cloud-snow-heavy.svg';
import { ReactComponent as CloudSunIcon } from '../assets/images/weather-icons/cloud-sun.svg';
import { ReactComponent as SunIcon } from '../assets/images/weather-icons/sun.svg';
import { ReactComponent as MoonIcon } from '../assets/images/weather-icons/moon.svg';
import { ReactComponent as MoonCloudIcon } from '../assets/images/weather-icons/moon-cloud.svg';
import { ReactComponent as WindIcon } from '../assets/images/weather-icons/wind.svg';


const WeatherComponent = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (searchCity) => {
    setCity(searchCity);
    try {
      const data = await getWeather(searchCity);
      setWeatherData(data);
      setError(null);
    } catch (err) {
      setError('Error fetching weather data');
      setWeatherData(null);
    }
  };

  const renderIcon = (weather) => {
    const iconProps = { width: 50, height: 50 }; // Specify icon size here
    switch (weather) {
      case 'Clear':
        return <SunIcon {...iconProps} />;
      case 'Partly Cloudy':
        return <CloudSunIcon {...iconProps} />;
      case 'Clouds':
        return <CloudIcon {...iconProps} />;
      case 'Rain':
        return <CloudRainIcon {...iconProps} />;
      case 'Heavy Rain':
        return <CloudHeavyRainIcon {...iconProps} />;
      case 'Thunderstorm':
        return <CloudLightningIcon {...iconProps} />;
      case 'Thunderstorm with Rain':
        return <CloudLightningRainIcon {...iconProps} />;
      case 'Snow':
        return <CloudSnowIcon {...iconProps} />;
      case 'Heavy Snow':
        return <CloudSnowHeavyIcon {...iconProps} />;
      case 'Windy':
        return <WindIcon {...iconProps} />;
      case 'Night Clear':
        return <MoonIcon {...iconProps} />;
      case 'Night Partly Cloudy':
        return <MoonCloudIcon {...iconProps} />;
      default:
        return <SunIcon {...iconProps} />; // Default icon
    }
  };

  return (
    <div className="container">
      <h1 className="my-4">Forecast</h1>
      <SearchBar onSearch={handleSearch} />
      <DateSelector />
      {error && <p className="text-danger">{error}</p>}
      {weatherData && (
        <div className="mt-4">
          <WeatherDisplay data={weatherData} renderIcon={renderIcon} />
        </div>
      )}
    </div>
  );
};

export default WeatherComponent;




