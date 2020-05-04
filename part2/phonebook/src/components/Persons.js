import React from "react";

const Persons = ({ displayList, handleDelete }) => {
  return (
    <div>
      {displayList.map((display) => (
        <div key={display.id}>
          <span>
            {display.name} {display.number}
          </span>
          <button onClick={() => handleDelete(display.id, display.name)}>
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Persons;
