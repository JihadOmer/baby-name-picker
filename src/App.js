import React from "react";
import "./App.css";
import data from "./data/data";

function App() {
  // const {data} = data;

  // const nameslist = data.map(name => {
  //    console.log(data[0].name);
  //    nameslist(name)

  // })

  console.log(data[0]);

  return (
    <div className="App">
      <ul>
        <li className="boy">name</li>
        <li className="boy">name</li>
        <li className="boy">name</li>
        <li className="girl">name</li>
        <li className="girl">name</li>
        <li className="girl">name</li>
        <li className="girl">name</li>
      </ul>
    </div>
  );
}

export default App;
