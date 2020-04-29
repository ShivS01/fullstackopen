import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ name, handleClick }) => {
  return <button onClick={handleClick}>{name}</button>;
};

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
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
        <table>
          <tbody>
            <Statistic text="good" value={good} />
            <Statistic text="neutral" value={neutral} />
            <Statistic text="bad" value={bad} />
            <tr>
              <td>all</td>
              <td>{total}</td>
            </tr>
            <tr>
              <td>average</td>
              <td>{avg}</td>
            </tr>
            <tr>
              <td>positive</td>
              <td>{positive * 100}%</td>
            </tr>
          </tbody>
        </table>
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
