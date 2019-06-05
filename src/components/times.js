import React from "react";

import { store, actions } from "../store";

import Time from "./time";

export default class Times extends React.Component {
  constructor() {
    super();
    this.state = {
      times: store().times || []
    };
  }
  componentDidMount() {
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
        <h2>Times:</h2>
        {times.map(time => (
          <div key={time.savedAt}>
            <Time time={time.time} />
            <button onClick={() => actions.removeTime(time)}>X</button>
          </div>
        ))}
      </div>
    );
  }
}
