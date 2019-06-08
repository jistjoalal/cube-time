import React from "react";

import Stats from "./Stats";
import TimeList from "./TimeList";

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
      <div>
        <h2>Time Data:</h2>
        <label>
          Label:
          <select onChange={this.changeLabelFilter}>
            <option value="">All</option>
            {labels.map(l => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </label>
        <Stats times={times} />
        <TimeList times={times} />
      </div>
    );
  }
  changeLabelFilter = e => {
    this.setState({ labelFilter: e.target.value });
  };
}
