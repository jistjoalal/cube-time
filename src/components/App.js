import React from "react";

import Title from "./Title";
import Timer from "./Timer";
import TimeData from "./TimeData";

import "../styles/components/App.css";

const App = () => {
  return (
    <div className="app">
      <Title />
      <Timer />
      <TimeData />
    </div>
  );
};

export default App;
