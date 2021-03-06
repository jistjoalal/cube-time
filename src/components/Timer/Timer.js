import React from "react";
import NoSleep from "nosleep.js";

import { actions } from "../../store";

import TimerView from "./TimerView";

export default class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      time: 0,
      start: null,
      running: false,
      debounce: false,
      label: ""
    };
    this.noSleep = new NoSleep();
  }
  render() {
    const { time, label } = this.state;
    return (
      <TimerView
        time={time}
        start={this.start}
        stop={this.stop}
        toggle={this.toggle}
        label={label}
        changeLabel={this.changeLabel}
        keyLabel={this.keyLabel}
      />
    );
  }
  // Label
  changeLabel = e => {
    this.setState({ label: e.target.value });
  };
  keyLabel = e => {
    if (e.key === "Enter") {
      e.target.blur();
    }
  };
  toggle = () => {
    const { running } = this.state;
    if (running) this.stop();
    else this.start();
  };
  // Timer controls
  start = () => {
    // prevent mobile screen lock
    this.noSleep.enable();
    this.setState({ time: 0, start: Date.now(), running: true });
    this.timer = setInterval(() => {
      const { start } = this.state;
      this.setState({ time: Date.now() - start });
    }, 1);
  };
  stop = () => {
    this.noSleep.disable();
    const { running, time, label } = this.state;
    if (!running) return;
    this.setState({ running: false });
    clearInterval(this.timer);
    actions.saveTime({ time, label });
  };
  // Keyboard controls
  componentDidMount() {
    window.addEventListener("keyup", this.spaceStart);
    window.addEventListener("keydown", this.spaceStop);
  }
  spaceStart = e => {
    const { running, debounce } = this.state;
    if (debounce) {
      return this.setState({ debounce: false });
    }
    // prevent text input override
    const shouldFire = e.target === document.body;
    if (e.key === " " && !running && shouldFire) {
      this.start();
    }
  };
  spaceStop = e => {
    const { running } = this.state;
    // prevent text input override
    const shouldFire = e.target === document.body;
    if (e.key === " " && shouldFire) {
      e.preventDefault();
      if (running) {
        this.stop();
        this.setState({ debounce: true });
      }
    }
  };
}
