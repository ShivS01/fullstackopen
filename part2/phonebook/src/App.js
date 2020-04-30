import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(persons);

  const changeName = (event) => setNewName(event.target.value);

  const changeNumber = (event) => setNewNumber(event.target.value);

  const searchName = (event) => {
    setSearch(event.target.value);
    setFiltered(
      persons.filter((person) =>
        person.name.toLowerCase().includes(event.target.value)
      )
    );
  };
  const addNew = (event) => {
    event.preventDefault();
    if (persons.find((person) => person.name === newName))
      return alert(`${newName} is already added to the phonebook`);

    const obj = {
      name: newName,
      number: newNumber,
    };

    setPersons(persons.concat(obj));
    setNewNumber("");
    setNewName("");
  };

  const find = (event) => {};

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with{" "}
        <input
          value={search}
          onChange={(e) => {
            searchName(e);
            find(e);
          }}
        />
      </div>
      <form onSubmit={addNew}>
        <div>
          name: <input value={newName} onChange={changeName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={changeNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {filtered.map((filter) => (
          <div key={filter.name}>
            {filter.name} {filter.number}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
