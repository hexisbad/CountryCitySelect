import React, { useState, useEffect } from "react";
import "./App.css";

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
// //       }
// const countryJSON = await fetch(
//     "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries.json);"
// const citiesJSON = 'https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/cities.json';

const articles = [];

const fetchAndLog = async () => {
  const response = await fetch(
    "https://www.universal-tutorial.com/api/getaccesstoken",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "api-token":
          "ocX0Beotv18nujCadTsubyCRc6PX_5i7l0PGrsEM54ZP7k6ZOTfls0_hHzB7bCWi04s",
        "user-email": "advaithkometh@gmail.com",
      },
    }
  );
  const json = await response.json();

  const response2 = await fetch(
    "https://www.universal-tutorial.com/api/countries/",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ` + json.auth_token,
        Accept: "application/json",
      },
    }
  );
  const json2 = await response2.json();

  json2.forEach((element) => {
    articles.push({
      id: element.country_short_name,
      name: element.country_name,
    });
  });
};

fetchAndLog();

// console.log(articles);

function App() {
  //   const countries = [
  //     { id: "1", name: "UAE" },
  //     { id: "2", name: "India" },
  //     { id: "3", name: "Portugal" },
  //   ];
  // console.log(articles)

  const countries = articles;
  // console.log(countries)

  const cities = [
    { id: "1", countryId: "1", name: "Dubai" },
    { id: "2", countryId: "1", name: "Al Ain" },
    { id: "3", countryId: "2", name: "Mumbai" },
    { id: "4", countryId: "2", name: "Cochin" },
    { id: "5", countryId: "3", name: "Portugese city 1" },
    { id: "6", countryId: "3", name: "Portugese city 2" },
  ];

  const [country, setCountry] = useState([]);
  const [city, setCity] = useState([]);

  useEffect(() => {
    setCountry(countries);
    // console.log(country);
  }, [countries]);

  console.log(country);

  const handleCity = (id) => {
    const dt = cities.filter((city) => city.countryId === id);
    setCity(dt);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Advaith's Country-City Selector</h2>
      </header>
      <div className="user-container ">
        <select
          className="form-control select-class"
          onChange={(event) => handleCity(event.target.value)}
        >
          <option className="info-item" value="0">
            {" "}
            Select Country
          </option>
          {country && country !== undefined
            ? country.forEach((country, index) => {
                return (
                  <option className="info-item" key={index} value={country.id}>
                    {country.name}
                  </option>
                );
              })
            : "No Country"}
        </select>
        <br></br>
        <select
          id="cities"
          className="form-control select-class"
          // onChange={(event) => handleCity(event.target.value)}
        >
          <option className="info-item" value="0">
            {" "}
            Select City{" "}
          </option>
          {city && city !== undefined
            ? city.map((city, index) => {
                return (
                  <option className="info-item" key={index} value={city.id}>
                    {city.name}
                  </option>
                );
              })
            : "No City"}
        </select>
        <button className="button-52">Send it home</button>
      </div>
    </div>
  );
}

export default App;
