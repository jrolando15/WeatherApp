import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WeatherComponent from './components/WeatherComponent';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import DateSelector from './components/DateSelector';
import './App.css';

function App() {
  const [city, setCity] = useState('');

  const handleSearch = (searchCity) => {
    setCity(searchCity);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Weather App</h1>
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<WeatherComponent />} />
            <Route path="/search" element={<SearchBar onSearch={handleSearch} />} />
            <Route path="/display" element={<WeatherDisplay data={{}} renderIcon={() => {}} />} />
            <Route path="/date" element={<DateSelector />} />
            {/* Add more routes here as needed */}
          </Routes>
        </main>
        <footer className="App-footer">
          <p>© 2024 Weather App Inc. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
