require("dotenv").config();
const mongoose = require("mongoose");
const url = process.env.MONGODB_URI;

console.log("connecting to", url);
const name = process.argv[2];
const number = process.argv[3];

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });

const personSchema = new mongoose.Schema({
  name: String,
  number: Number,
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name,
  number,
});

person.save().then((response) => {
  console.log("person saved!");
  mongoose.connection.close();
});

Person.find({}).then((result) => {
  result.forEach((person) => {
    console.log(person);
  });
  mongoose.connection.close();
});
