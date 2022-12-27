import React from "react";
import "./App.css";
import data from "./data/data";
import Nameslist from "./components/NamesList";

function App() {
  return (
    <div className="App">
      <Nameslist data={data} />
    </div>
  );
}

export default App;
