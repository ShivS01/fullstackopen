const express = require("express");

const app = express();

app.use(express.json());

const persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1,
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2,
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3,
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4,
  },
];

const port = 3002;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.end("<h1>Hello Person</h1>");
  console.log(`get "/" called`);
});

app.get("/api", (req, res) => {
  res.end("<h2>You have arrived at the api page</h2>");
  console.log(`api called`);
});

app.get("/api/persons", (req, res) => {
  res.json(persons);
  console.log(`persons list called`);
});

app.get("/info", (req, res) => {
  const info = `<div>Phonebook has info for ${persons.length} people</div>`;
  const time = `<div>${new Date()}</div>`;
  res.end(info + time);
  console.log(`info called`);
});

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);

  const person = persons.find((person) => person.id === id);
  if (person) res.json(person);
  else res.status(404).end(`person with id = ${id} not found!!`);
});