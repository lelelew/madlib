import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Madlib from "./Madlib";

const App: React.FC = () => {
  return (
    <div className="App">
      <Madlib message="I'm a Madlib" />
    </div>
  );
};

export default App;
