import React from "react";

import { actions } from "../../store";

import TimerView from "./timerView";

export default class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      time: 0,
      start: null,
      running: false,
      debounce: false
    };
  }
  render() {
    const { time } = this.state;
    return <TimerView time={time} start={this.start} stop={this.stop} />;
  }
  // Timer controls
  start = () => {
    this.setState({ time: 0, start: Date.now(), running: true });
    this.timer = setInterval(() => {
      const { start } = this.state;
      this.setState({ time: Date.now() - start });
    }, 1);
  };
  stop = () => {
    if (!this.state.running) return;
    this.setState({ running: false });
    clearInterval(this.timer);
    actions.saveTime(this.state.time);
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
