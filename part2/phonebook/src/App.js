import React, { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

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

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterby={search} handleFilter={searchName} />

      <h3>Add a new</h3>
      <PersonForm
        submitNew={addNew}
        inputValue={(newName, newNumber)}
        handleInputState={(changeName, changeNumber)}
      />
      <h3>Numbers</h3>
      <Persons displayList={filtered} />
    </div>
  );
};

export default App;
