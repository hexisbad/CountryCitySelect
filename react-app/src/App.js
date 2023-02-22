import React, { useState, useEffect } from 'react';
import './App.css';

const TokenHeaders = {
  Accept: 'application/json',
  'api-token':  'ocX0Beotv18nujCadTsubyCRc6PX_5i7l0PGrsEM54ZP7k6ZOTfls0_hHzB7bCWi04s',
  'user-email': 'advaithkometh@gmail.com',
};

function App() {

  const [countries, setCountries] = useState([]);
  const [token, setToken] = useState(null);
  const [country, setCountry] = useState('');
  const [cities, setCities] = useState('');
  const [buttonText, setButtonText] = useState('Send it home')

  useEffect(() => {
    fetch('https://www.universal-tutorial.com/api/getaccesstoken', {
      headers: TokenHeaders
    })
      .then(r => r.json())
      .then(d => setToken(d));
  }, []);

  useEffect(() => {
    if (token) {
      fetch('https://www.universal-tutorial.com/api/countries/', {
        headers: {
          Authorization: `Bearer ` + token.auth_token,
          Accept: 'application/json'
        },
      })
        .then(result => result.json())
        .then(data => setCountries(data));
    }
  }, [token]);

  useEffect(() => {
    if (country && token) {
      fetch(`https://www.universal-tutorial.com/api/states/${country}`, {
        headers: {
          Authorization: `Bearer ` + token.auth_token,
          Accept: 'application/json'
        },
     })
      .then(result => result.json())
      .then(data => setCities(data))
    }
  }, [country]);

  const handleCountry = (country) => {
    setCountry(country);
  };

  const onButtonPress = () => {
    setButtonText('Psych')
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h2>Advaith's Country <strike>City</strike> State Selector</h2>
      </header>
      <div className='user-container '>
        <select
          className='form-control'
          onChange={(event) => handleCountry(event.target.value)}
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
          className='form-control'
        >
          <option className='info-item' value='0'>
            {' '}
            Select State{' '}
          </option>
          {cities && cities !== undefined
            ? cities.map((city, index) => {
                return (
                  <option className='info-item' key={index} value={city.id}>
                    {city.state_name}
                  </option>
                );
              })
            : 'No City'}
        </select>
        <button onClick={onButtonPress} className='button-52'>{buttonText}</button>
      </div>
    </div>
  );
}

export default App;
