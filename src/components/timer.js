import React from "react";

import { actions } from "../store";

import Time from "./time";

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
    return (
      <div>
        <h2>Timer:</h2>
        <p>Space-Up to start, Space-Down to stop.</p>
        <Time time={time} />
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
      </div>
    );
  }
  // Timer controls
  start = e => {
    this.setState({ time: 0, start: Date.now(), running: true });
    this.timer = setInterval(() => {
      const { start } = this.state;
      this.setState({ time: Date.now() - start });
    }, 1);
  };
  stop = e => {
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
  spaceStart = ({ key }) => {
    const { running, debounce } = this.state;
    if (debounce) {
      return this.setState({ debounce: false });
    }
    if (key === " " && !running) {
      this.start();
    }
  };
  spaceStop = ({ key }) => {
    const { running } = this.state;
    if (key === " " && running) {
      this.stop();
      this.setState({ debounce: true });
    }
  };
}
