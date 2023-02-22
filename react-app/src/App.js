import React, { useState, useEffect } from 'react';
import './App.css';

const TokenHeaders = {
  Accept: 'application/json',
  'api-token':
    'ocX0Beotv18nujCadTsubyCRc6PX_5i7l0PGrsEM54ZP7k6ZOTfls0_hHzB7bCWi04s',
  'user-email': 'advaithkometh@gmail.com',
};

function App() {
  const cities = [
    { id: '1', countryId: '1', name: 'Dubai' },
    { id: '2', countryId: '1', name: 'Al Ain' },
    { id: '3', countryId: '2', name: 'Mumbai' },
    { id: '4', countryId: '2', name: 'Cochin' },
    { id: '5', countryId: '3', name: 'Portugese city 1' },
    { id: '6', countryId: '3', name: 'Portugese city 2' },
  ];

  const [countries, setCountries] = useState([]);
  const [token, setToken] = useState(null);
  const [city, setCity] = useState([]);

  useEffect(() => {
    fetch('https://www.universal-tutorial.com/api/getaccesstoken', {
      method: 'GET',
      headers: TokenHeaders,
    })
      .then((r) => r.json())
      .then((d) => setToken(d));
  }, []);

  useEffect(() => {
    if (token) {
      fetch('https://www.universal-tutorial.com/api/countries/', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ` + token.auth_token,
          Accept: 'application/json',
        },
      })
        .then((r) => r.json())
        .then((d) => setCountries(d));
    }
  }, [token]);

  useEffect(() => {
    if (countries) {
      console.log('fucking finally some countries', countries);
    }
  }, [countries]);

  const handleCity = (id) => {
    const dt = cities.filter((city) => city.countryId === id);
    setCity(dt);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h2>Advaith's Country-City Selector</h2>
      </header>
      <div className='user-container '>
        <select
          className='form-control select-class'
          onChange={(event) => handleCity(event.target.value)}
        >
          <option className='info-item' value='0'>
            {' '}
            Select Country
          </option>
          {countries && countries.length && countries !== undefined
            ? countries.map((country, index) => {
                return (
                  <option className='info-item' key={index} value={country.id}>
                    {country.country_name}
                  </option>
                );
              })
            : 'No Country'}
        </select>
        <br></br>
        <select
          id='cities'
          className='form-control select-class'
          // onChange={(event) => handleCity(event.target.value)}
        >
          <option className='info-item' value='0'>
            {' '}
            Select City{' '}
          </option>
          {city && city !== undefined
            ? city.map((city, index) => {
                return (
                  <option className='info-item' key={index} value={city.id}>
                    {city.name}
                  </option>
                );
              })
            : 'No City'}
        </select>
        <button className='button-52'>Send it home</button>
      </div>
    </div>
  );
}

export default App;
