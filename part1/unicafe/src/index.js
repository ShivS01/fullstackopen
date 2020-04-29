import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ name, handleClick }) => {
  return <button onClick={handleClick}>{name}</button>;
};

const Statistics = ({ good, neutral, bad }) => {
  return (
    <>
      <br />
      <div>Statistics</div>
      <br />
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
    </>
  );
};

const Feedback = ({ handleGood, handleNeutral, handleBad }) => {
  return (
    <>
      <div>Give feedback</div>
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
