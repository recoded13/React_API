import React from 'react';

const FlagCard = ({ country, onClick, selected, onClose }) => {
  const handleCardClick = () => {
    onClick(country);
  };

  const handleCloseClick = (e) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <div className={`flag-card ${selected ? 'active' : ''}`} onClick={handleCardClick}>
      <img src={country.flags.png} alt={`${country.name.common} flag`} />
      <h2>{country.name.common}</h2>
      {selected && (
        <div className="popup">
          <h3>{country.name.common}</h3>
          <p>Continente: {country.region}</p>
          <p>Capital: {country.capital}</p>
          <p>Población: {country.population}</p>
          <button onClick={handleCloseClick}>Cerrar</button>
        </div>
      )}
    </div>
  );
};

export default FlagCard;
