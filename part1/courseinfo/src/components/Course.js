import React from "react";

const Total = ({ parts }) => {
  const total = parts.reduce((s, p) => {
    return s + p.exercises;
  }, 0);
  return <strong>Number of exercises {total}</strong>;
};

const Part = ({ part, exercises }) => {
  return (
    <p>
      {part} {exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <Part key={part.name} part={part.name} exercises={part.exercises} />
      ))}
    </>
  );
};

const Header = ({ name }) => {
  return <h1>{name}</h1>;
};

const Course = ({ course }) => {
  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

export default Course;
