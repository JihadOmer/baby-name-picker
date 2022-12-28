import React from "react";
import "./App.css";
import data from "./data/data";
import Nameslist from "./components/NamesList";
import Footer from "./components/Footer";
import Search from "./components/Search";
import ShortList from "./components/ShortList";




function App() {
  return (
    <div className="App">
      <main>
        <Search />
        <ShortList/>
        <Nameslist data={data} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
