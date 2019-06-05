import React from "react";

import { store } from "../../store";

import TimeList from "./timeList";
import Stats from "./stats";

export default class TimeData extends React.Component {
  constructor() {
    super();
    this.state = {
      times: store().times
    };
  }
  componentDidMount() {
    // state reacts to store changes
    window.onstorage = () => {
      this.setState({
        times: store().times
      });
    };
  }
  render() {
    const { times } = this.state;
    return (
      <div>
        <Stats times={times} />
        <TimeList times={times} />
      </div>
    );
  }
}
