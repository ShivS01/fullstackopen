import React from "react";

const Persons = ({ displayList }) => {
  return (
    <div>
      {displayList.map((display) => (
        <div key={display.name}>
          {display.name} {display.number}
        </div>
      ))}
    </div>
  );
};

export default Persons;
