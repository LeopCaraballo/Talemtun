import React, { useEffect, useState } from 'react';
import LocalDate from "./components/LocalDate";
import axios from 'axios';
import WeatherDetails from './components/WeatherDetails';

import HumidityIcon from './assets/icons/humidity.png'
import TempIcon from './assets/icons/temp.png'
import WindIcon from './assets/icons/wind.png'


const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/weather', {
        params: {
          city: 'Cali',
          key: '200',
        },
      });
      setWeatherData(response.data);
    } catch (error) {
      setError('Error al cargar los datos del clima');
      setWeatherData(null);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!weatherData) {
    return <div>Cargando...</div>;
  }

  const { name, main, weather, wind } = weatherData;
  const celsiusTemperature = (main.temp - 273.15);

  return (
    <>
      <div className='header__container'>
        <h2><span>{name}</span></h2>
        <div className='header__container--date'>
          <LocalDate />
        </div>
        <h1 className='header__container--title'>{celsiusTemperature}°</h1>
        <div className='header__container--bottom'>
          <p>Clima / <span>{weather[0].main}</span></p>
        </div>
      </div>

      <div className='footer__container'>
      <WeatherDetails
        temperature={celsiusTemperature}
        humidity={main.humidity}
        windSpeed={wind.speed}
        HumidityIcon={HumidityIcon}
        TempIcon={TempIcon}
        WindIcon={WindIcon}
        />
        </div>
    </>
  );
};

export default App;
