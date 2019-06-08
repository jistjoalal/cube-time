import React from "react";

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
  }
  render() {
    const { time, label } = this.state;
    return (
      <TimerView
        time={time}
        start={this.start}
        stop={this.stop}
        label={label}
        changeLabel={this.changeLabel}
      />
    );
  }
  // Label
  changeLabel = e => {
    this.setState({ label: e.target.value });
  };
  // Timer controls
  start = () => {
    this.setState({ time: 0, start: Date.now(), running: true });
    this.timer = setInterval(() => {
      const { start } = this.state;
      this.setState({ time: Date.now() - start });
    }, 1);
  };
  stop = () => {
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
    if (e.key === " " && !running) {
      this.start();
    }
  };
  spaceStop = e => {
    const { running } = this.state;
    if (e.key === " ") {
      e.preventDefault();
      if (running) {
        this.stop();
        this.setState({ debounce: true });
      }
    }
  };
}
