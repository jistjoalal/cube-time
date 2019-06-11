import React from "react";

import Title from "./Title";
import Timer from "./Timer";
import TimeData from "./TimeData";

import "../styles/app.css";

const App = () => {
  return (
    <div>
      <Title />
      <Timer />
      <TimeData />
    </div>
  );
};

export default App;
