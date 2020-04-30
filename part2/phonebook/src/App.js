import React, { useState } from "react";
import Phonebook from "./components/Phonebook";
import Numbers from "./components/Numbers";
const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const changeInput = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const addNew = (event) => {
    event.preventDefault();
    if (persons.find((person) => person.name === newName))
      return alert(`${newName} is already added to the phonebook`);
    const obj = {
      name: newName,
    };
    setPersons(persons.concat(obj));
    setNewName("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNew}>
        <div>
          name: <input value={newName} onChange={changeInput} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => (
          <div key={person.name}>{person.name}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
