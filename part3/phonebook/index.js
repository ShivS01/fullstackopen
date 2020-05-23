require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const Person = require("./models/person");

const app = express();
app.use(express.json());
app.use(express.static("build"));
app.use(cors());

morgan.token("data", (req) => JSON.stringify(req.body));
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :data")
);

app.get("/api/persons", (req, res) => {
  Person.find({}).then((persons) => {
    res.json(persons.map((person) => person.toJSON()));
  });
  console.log(`persons list called`);
});

app.get("/api/persons/:id", (req, res, next) => {
  console.log(`fetching single person details`);
  const id = req.params.id;

  Person.findById(id)
    .then((person) => {
      res.json(person);
      if (person) {
        response.json(person);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
  // const person = persons.find((person) => person.id === id);
  // if (person) res.json(person);
  // else res.status(404).end(`person with id = ${id} not found!!`);
});

app.get("/api/", (req, res) => {
  //HTTP 418: I'm a teapot, lol this funny
  res.status(418).end();
});

app.delete("/api/persons/:id", (req, res) => {
  console.log(`executing HTTP delete`);
  const id = req.params.id;

  Person.findByIdAndDelete(id)
    .then((result) => {
      res.status(204).end();
    })
    .catch((error) => console.log(error));
});

app.post("/api/persons", (req, res) => {
  console.log(`Post called`);
  const name = req.body.name;
  const number = req.body.number;

  // if (!name && !number) res.status(400).json({ error: "content missing" });
  // else if (!name) res.status(400).json({ error: "name is missing" });
  // else if (!number) res.status(400).json({ error: "number is missing" });
  // else if (persons.find((person) => person.name === name))
  //   return res.status(400).json({ error: "name must be unique" });

  const person = new Person({
    name,
    number,
  });

  person.save().then((savedPerson) => {
    res.json(savedPerson);
  });
  // persons = persons.concat(person);
});

app.put("/api/persons/:id", (req, res, next) => {
  const id = req.body.id;
  const newNumber = {
    number: req.body.number,
  };
  Person.findByIdAndUpdate(id, newNumber, { new: true })
    .then((updatedPerson) => {
      res.json(updatedPerson.toJSON());
    })
    .catch((error) => next(error));
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

// handler of requests with unknown endpoint
app.use(unknownEndpoint);

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  }

  next(error);
};

app.use(errorHandler);
