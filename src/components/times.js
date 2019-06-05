import React from "react";

import { store, actions } from "../store";

import Time from "./time";
import Stats from "./stats";

export default class Times extends React.Component {
  constructor() {
    super();
    this.state = {
      times: store().times || []
    };
  }
  componentDidMount() {
    // state reacts to store changes
    window.onstorage = () => {
      this.setState({
        times: store().times || []
      });
    };
  }
  render() {
    const { times } = this.state;
    return (
      <div>
        <Stats times={times} />
        <h2>Times:</h2>
        <button onClick={this.removeAll}>Clear</button>
        {times.map((time, i) => (
          <div key={time.savedAt}>
            <span>{times.length - i} - </span>
            <Time time={time.time} />
            <button onClick={() => actions.removeTime(time)}>X</button>
          </div>
        ))}
      </div>
    );
  }
  removeAll = e => {
    const really = window.confirm("Really remove all times?");
    if (really) actions.removeAllTimes();
  };
}
