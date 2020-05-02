import React from "react";

const Country = ({ country }) => {
  return (
    <div key={country.name}>
      <h1>{country.name}</h1>
      <div>capital {country.capital}</div>
      <div>population {country.population}</div>
      <h2>languages</h2>
      <ul>
        {country.languages.map((lang, i) => (
          <li key={i}>{lang.name}</li>
        ))}
      </ul>
      <img src={country.flag} alt="flag"></img>
    </div>
  );
};

export default Country;
