import React, { useState, useEffect } from 'react';

const LocalDate = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const dateString = date.toLocaleDateString('es-ES', options);
      setCurrentDate(dateString);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p>{currentDate}</p>;
};

export default LocalDate;
