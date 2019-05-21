import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Madlib from "./Madlib";

const App: React.FC = () => {
  return (
    <div className="App">
      <Madlib story="A long time ago, in a ADJ NOUN VERB place NOUN NOUN." />
    </div>
  );
};

export default App;
