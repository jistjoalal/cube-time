import React from "react";

import Stats from "./Stats";
import TimeList from "./TimeList";

import "../../styles/components/TimeData.css";

export default class TimeData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labelFilter: ""
    };
  }
  render() {
    const { labelFilter } = this.state;
    const labels = this.props.times.reduce(
      (a, { label }) => (!label || a.includes(label) ? a : [...a, label]),
      []
    );
    const times = labelFilter
      ? this.props.times.filter(({ label }) => label === labelFilter)
      : this.props.times;
    return (
      <div className="timeData">
        <select className="timeData__label" onChange={this.changeLabelFilter}>
          <option value="">All</option>
          {labels.map(l => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </select>
        <div className="timeData__data">
          <Stats times={times} />
          <TimeList times={times} />
        </div>
      </div>
    );
  }
  changeLabelFilter = e => {
    this.setState({ labelFilter: e.target.value });
  };
}
