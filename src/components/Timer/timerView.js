import React from "react";

import Time from "../Time";

import "../../styles/components/TimerView.css";

export default ({ time, start, stop, label, changeLabel }) => (
  <div className="timerView">
    <div className="timerView__inner">
      <p className="timerView__info">Space-Up to start, Space-Down to stop.</p>
      <Time time={time} className="timerView__time" />
      <div>
        <input
          className="timerView__label"
          type="text"
          value={label}
          onChange={changeLabel}
          placeholder="Label"
        />
        <button className="timerView__btn" onClick={start}>
          Start
        </button>
        <button className="timerView__btn" onClick={stop}>
          Stop
        </button>
      </div>
    </div>
  </div>
);
