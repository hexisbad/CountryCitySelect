import React from "react";

// var req = unirest("GET", "https://www.universal-tutorial.com/api/getaccesstoken");

//   req.headers({
//     "Accept": "application/json",
//     "api-token": "ocX0Beotv18nujCadTsubyCRc6PX_5i7l0PGrsEM54ZP7k6ZOTfls0_hHzB7bCWi04s",
//     "user-email": "advaithkometh@gmail.com"
//   });


// getCountry() {
//         return countries.map((country) => {
//           return <option value={country.dial_code}>{country.name}
//                  </option>;
//         });
//       }

// getCity() {
//         return city.map((city) => {
//           return <option value={country.dial_code}>{city.name}
//                  </option>;
//         });
//       }

const countriesJSON = 'https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries.json';
const citiesJSON = 'https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/cities.json';

function App() {
  return (
    <>
      <select className="form-control">
        Country
        <option value="choose"> - Select your country - </option>
        {countriesJSON.map((country) => <option id={country.id}>{country.name}</option>)}
      </select>
      <select>
        City
        <option value="choose"> - Select your country - </option>
        {/* {this.getCity()} */}
      </select>
      <button>SEND IT</button>
    </>
  );
}

export default App;
