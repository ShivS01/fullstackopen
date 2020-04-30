import React from "react";

const PersonForm = ({ submitNew, inputValue, handleInputState }) => {
  return (
    <form onSubmit={submitNew}>
      <div>
        name:{" "}
        <input
          value={inputValue.newName}
          onChange={handleInputState.changeName}
        />
      </div>
      <div>
        number:{" "}
        <input
          value={inputValue.newNumber}
          onChange={handleInputState.changeNumber}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
