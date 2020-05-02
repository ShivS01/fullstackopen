import React, { useState } from "react";
import Country from "./Country";

const List = ({ text, name, country }) => {
  const [flag, setFlag] = useState(false);

  const toggle = (event) => {
    event.preventDefault();
    setFlag(!flag);
  };
  const renderCountry = () => {
    if (flag) return <Country country={country} />;
  };

  return (
    <>
      <form onSubmit={toggle}>
        <span>{name}</span>
        <button type="submit">{text}</button>
        <div>{renderCountry()}</div>
      </form>
    </>
  );
};

export default List;
