import React from 'react';

const WeatherDetails = ({ temperature, humidity, windSpeed, HumidityIcon, TempIcon, WindIcon }) => {
  return (
    <>
    <div className='footer__container--details'>
      <img src={TempIcon} />
      <p>Temperatura: <span>{temperature}</span></p>
    </div>
      <hr />
      <div className='footer__container--details'>
      <img src={HumidityIcon} />
      <p>Humedad: <span>{humidity}%</span></p>
      </div>
      <hr />
      <div className='footer__container--details'>
      <img src={WindIcon} />
      <p>Velocidad Viento: <span>{windSpeed} m/s</span></p>
      </div>
    </>
  );
};

export default WeatherDetails;
