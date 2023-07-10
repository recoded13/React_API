import React, { useEffect, useState } from 'react';
import FlagCard from './FlagCard';
import tvStaticImage from '../assets/animate.jpg';

const FlagGallery = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        setCountries(data.slice(0, 25));
      })
      .catch(error => {
        console.log('Ocurrió un error:', error);
      });
  }, []);

  const handleUpdate = () => {
    setShowAnimation(true);
    setLoading(true);

    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        const randomCountries = getRandomCountries(data, 25);
        setCountries(randomCountries);
        setLoading(false);
        setTimeout(() => {
          setShowAnimation(false);
        }, 2000); // Retraso de 2 segundos antes de ocultar la animación
      })
      .catch(error => {
        console.log('Ocurrió un error:', error);
        setLoading(false);
        setShowAnimation(false);
      });
  };

  const getRandomCountries = (data, count) => {
    const shuffled = data.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const handleCardClick = country => {
    setSelectedCountry(country);
  };

  const closePopup = () => {
    setSelectedCountry(null);
  };

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <nav>
        <button onClick={handleUpdate}>Actualizar</button>
        <input type="text" placeholder="Buscar país" value={searchTerm} onChange={handleSearch} />
      </nav>
      <div className="flag-gallery">
        {filteredCountries.map(country => (
          <FlagCard
            key={country.name.common}
            country={country}
            onClick={handleCardClick}
            selected={selectedCountry === country}
            onClose={closePopup}
          />
        ))}
      </div>
      {loading && <div className="tv-static" />}
      {showAnimation && <img src={tvStaticImage} className="tv-animation" alt="Cargando..." />}
    </div>
  );
};

export default FlagGallery;
