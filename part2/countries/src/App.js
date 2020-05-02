import React, { useEffect, useState } from "react";
import Axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [find, setFind] = useState("");

  useEffect(() => {
    Axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setData(response.data);
    });
  }, []);

  const changeFind = (event) => setFind(event.target.value);

  const toShow = data.filter((entry) =>
    entry.name.toLowerCase().includes(find)
  );


  const checkFilter = () => {
    console.log(toShow);
    if (toShow.length === 1) {
      return (
        toShow.map((e) => {
          return (
            <div key={e.name}>
              <h1>{e.name}</h1>
              <div>capital {e.capital}</div>
              <div>population {e.population}</div>
              <h2>languages</h2>
              <ul>{e.languages.map(lang => <li key={lang.name}>{lang.name}</li>)}</ul>
              <img src={e.flag}></img>
            </div>
          )
        })
      );
    }
    else if (toShow.length <= 10)
      return toShow.map((each) => <div key={each.name}>{each.name}</div>);
    else if (toShow.length > 10)
      return "too many matches, specify another field";
  };

  return (
    <div>
      <div>find countries</div>
      <input onChange={changeFind} />
      <div>{checkFilter()}</div>
    </div>
  );
}

export default App;
