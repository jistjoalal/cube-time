import React from "react";

import { actions } from "../store";

import Time from "./time";

export default class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      time: 0,
      start: null,
      running: true
    };
  }
  render() {
    const { time } = this.state;
    return (
      <div>
        <Time time={time} />
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
      </div>
    );
  }
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
}
