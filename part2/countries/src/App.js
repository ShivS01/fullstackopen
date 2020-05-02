import React, { useEffect, useState } from "react";
import Axios from "axios";
import Countries from "./components/Countries";

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
    entry.name.toLowerCase().includes(find.toLowerCase())
  );

  return (
    <div>
      <div>find countries</div>
      <input onChange={changeFind} />
      <Countries filteredCountries={toShow} />
    </div>
  );
}

export default App;
