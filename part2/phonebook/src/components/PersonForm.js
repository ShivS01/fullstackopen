import React from "react";

const PersonForm = ({ submitNew, inputValue, handleName, handleNumber }) => {
  return (
    <form onSubmit={submitNew}>
      <div>
        name:
        <input value={inputValue.newName} onChange={handleName} />
      </div>
      <div>
        number:
        <input value={inputValue.newNumber} onChange={handleNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
