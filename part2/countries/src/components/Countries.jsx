import React from "react";
import Country from "./Country";
import List from "./List";

const Countries = ({ filteredCountries }) => {
  const renderList = () =>
    filteredCountries.map((country) => (
      <div key={country.name}>
        <List text="show" name={country.name} country={country} />
      </div>
    ));

  if (filteredCountries.length === 1)
    return filteredCountries.map((singleCountry) => (
      <Country key={singleCountry.name} country={singleCountry} />
    ));
  else if (filteredCountries.length <= 10) return renderList();
  else if (filteredCountries.length > 10)
    return <div>too many matches, specify another field</div>;

  return <div>if you see this, you're not supposed to</div>;
};

export default Countries;
