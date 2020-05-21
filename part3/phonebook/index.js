// let persons = [
//   {
//     name: "Arto Hellas",
//     number: "040-123456",
//     id: 1,
//   },
//   {
//     name: "Ada Lovelace",
//     number: "39-44-5323523",
//     id: 2,
//   },
//   {
//     name: "Dan Abramov",
//     number: "12-43-234345",
//     id: 3,
//   },
//   {
//     name: "Mary Poppendieck",
//     number: "39-23-6423122",
//     id: 4,
//   },
// ];

require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const Person = require("./models/person");

const app = express();
app.use(cors());

morgan.token("data", (req) => JSON.stringify(req.body));

app.use(express.json());
app.use(express.static("build"));

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :data")
);

app.get("/api/persons", (req, res) => {
  Person.find({}).then((persons) => {
    res.json(persons.map((person) => person.toJSON()));
  });
  console.log(`persons list called`);
});

app.get("/api/persons/:id", (req, res) => {
  console.log(`fetching single person details`);
  const id = Number(req.params.id);
  const person = persons.find((person) => person.id === id);
  if (person) res.json(person);
  else res.status(404).end(`person with id = ${id} not found!!`);
});

// app.delete("/api/persons/:id", (req, res) => {
//   console.log(`executing HTTP delete`);
//   const id = Number(req.params.id);
//   persons = persons.filter((person) => person.id !== id);
//   res.status(204).end(`person with id = ${id} deleted`);
// });

// app.post("/api/persons", (req, res) => {
//   console.log(`Post called`);
//   const name = req.body.name;
//   const number = req.body.number;

//   if (!name && !number) res.status(400).json({ error: "content missing" });
//   else if (!name) res.status(400).json({ error: "name is missing" });
//   else if (!number) res.status(400).json({ error: "number is missing" });
//   else if (persons.find((person) => person.name === name))
//     return res.status(400).json({ error: "name must be unique" });

//   const person = {
//     name,
//     number,
//     id: generateID(),
//   };

//   persons = persons.concat(person);
//   res.json(person);
// });

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
