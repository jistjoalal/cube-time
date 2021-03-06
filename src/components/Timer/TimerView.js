import React from "react";

import Time from "../Time";

import "../../styles/components/TimerView.css";

export default ({
  time,
  start,
  stop,
  toggle,
  label,
  changeLabel,
  keyLabel
}) => (
  <div className="timerView">
    <div className="timerView__inner">
      <p className="timerView__info info">
        Space-Up to start, Space-Down to stop.
      </p>
      <p className="info timerView__info--mobile">
        Tap the cube to start/stop timer.
      </p>
      <Time time={time} className="timerView__time" />
      <input
        className="timerView__label"
        type="text"
        value={label}
        onChange={changeLabel}
        onKeyPress={keyLabel}
        placeholder="Label"
        maxLength="30"
      />
      <span className="timerView__startStop">
        <button className="btn btn__timer" onClick={start}>
          Start
        </button>
        <button className="btn btn__timer" onClick={stop}>
          Stop
        </button>
      </span>
    </div>
    {/* https://commons.wikimedia.org/wiki/File%3ARubik's_cube.svg */}
    <img
      className="timerView__cube"
      alt="cube"
      src="cube.png"
      onClick={toggle}
      draggable={false}
    />
  </div>
);
