import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ name, handleClick }) => {
  return <button onClick={handleClick}>{name}</button>;
};

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const avg = (good * 1 + neutral * 0 + bad * -1) / total;
  const positive = good / total;
  if (total !== 0) {
    return (
      <>
        <br />
        <strong>Statistics</strong>
        <br />
        <div>good {good}</div>
        <div>neutral {neutral}</div>
        <div>bad {bad}</div>
        <div>all {total}</div>
        <div>average {avg}</div>
        <div>positive {positive * 100}%</div>
      </>
    );
  } else {
    return (
      <>
        <br />
        <strong>Statistics</strong>
        <div>No feedback given</div>
      </>
    );
  }
};

const Feedback = ({ handleGood, handleNeutral, handleBad }) => {
  return (
    <>
      <strong>Give feedback</strong>
      <br />
      <Button name="good" handleClick={handleGood} />
      <Button name="neutral" handleClick={handleNeutral} />
      <Button name="bad" handleClick={handleBad} />
      <br />
    </>
  );
};
const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const handleGood = () => {
    console.log("Good");
    setGood(good + 1);
  };
  const handleNeutral = () => {
    console.log("Neutral");
    setNeutral(neutral + 1);
  };
  const handleBad = () => {
    console.log("Bad");
    setBad(bad + 1);
  };
  return (
    <>
      <Feedback
        handleGood={handleGood}
        handleNeutral={handleNeutral}
        handleBad={handleBad}
      />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
