import React from "react";
import "./App.css";
import data from "./data/data";
import Nameslist from "./components/NamesList";
import Footer from "./components/Footer";
import Search from "./components/Search";
function App() {
  return (
    <div className="App">
      <main>
        <Search />
        <Nameslist data={data} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
