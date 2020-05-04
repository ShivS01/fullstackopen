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
      // console.log(fetchedData);
    });
  }, []);
  // console.log(persons);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  const changeName = (event) => setNewName(event.target.value);

  const changeNumber = (event) => setNewNumber(event.target.value);

  const changeFilter = (event) => setSearch(event.target.value);

  const addNew = (event) => {
    event.preventDefault();
    if (
      persons.find(
        (person) =>
          person.name.toLowerCase() === newName.toLowerCase() &&
          person.number === newNumber
      )
    ) {
      return alert(`${newName} is already added to the phonebook`);
    } else if (
      persons.find(
        (person) => person.name.toLowerCase() === newName.toLowerCase()
      )
    ) {
      updatePerson();
    } else {
      const obj = {
        name: newName,
        number: newNumber,
      };

      service.create(obj).then((update) => {
        setPersons(persons.concat(update));
        setNewName("");
        setNewNumber("");
      });
    }
  };

  const updatePerson = () => {
    const person = persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );
    const toUpdate = { ...person, number: newNumber };

    alert(
      `${toUpdate.name} is already added to phonebook, replace the old number with a new one?`
    );
    service
      .update(toUpdate.id, toUpdate)
      .then(() => service.getAll().then((update) => setPersons(update)));
  };

  const deletePerson = (id, name) => {
    alert(`delete ${name}?`);
    service
      .remove(id)
      .then(() => service.getAll().then((update) => setPersons(update)));
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
      <Persons displayList={toShow} handleDelete={deletePerson} />
    </div>
  );
};

export default App;
