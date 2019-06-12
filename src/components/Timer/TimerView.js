import React from "react";

import Time from "../Time";

import "../../styles/components/TimerView.css";

export default ({ time, start, stop, label, changeLabel, keyLabel }) => (
  <div className="timerView">
    <div className="timerView__inner">
      <p className="timerView__info info">
        Space-Up to start, Space-Down to stop.
      </p>
      <Time time={time} className="timerView__time" />
      <div className="timerView__controls">
        <input
          className="timerView__label"
          type="text"
          value={label}
          onChange={changeLabel}
          onKeyPress={keyLabel}
          placeholder="Label"
          maxLength="30"
        />
        <button className="btn btn__timer" onClick={start}>
          Start
        </button>
        <button className="btn btn__timer" onClick={stop}>
          Stop
        </button>
      </div>
    </div>
    {/* https://commons.wikimedia.org/wiki/File%3ARubik's_cube.svg */}
    <img className="timerView__cube" alt="cube" src="cube.png" />
  </div>
);
