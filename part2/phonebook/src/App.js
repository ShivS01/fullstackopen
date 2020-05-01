import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    Axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
      console.log(response);
    });
  }, []);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  const changeName = (event) => setNewName(event.target.value);

  const changeNumber = (event) => setNewNumber(event.target.value);

  const changeFilter = (event) => setSearch(event.target.value);

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

  const toShow = persons.filter((person) =>
    person.name.toLowerCase().includes(search)
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterby={search} handleFilter={changeFilter} />

      <h3>Add a new</h3>
      <PersonForm
        submitNew={addNew}
        inputValue={(newName, newNumber)}
        handleInputState={(changeName, changeNumber)}
      />
      <h3>Numbers</h3>
      <Persons displayList={toShow} />
    </div>
  );
};

export default App;
