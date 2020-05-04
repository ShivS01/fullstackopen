import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import service from "./services/Data";

const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    service.getAll().then((fetchedData) => {
      setPersons(fetchedData);
      console.log(fetchedData);
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

    service.create(obj).then((returnedObj) => {
      setPersons(persons.concat(returnedObj));
      setNewName("");
      setNewNumber("");
    });
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
        handleNumber={changeNumber}
        handleName={changeName}
      />
      <h3>Numbers</h3>
      <Persons displayList={toShow} />
    </div>
  );
};

export default App;
