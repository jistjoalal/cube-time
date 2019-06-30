import React from "react";

import { actions } from "../../store";
import { exportTimes, importTimes } from "../../importExport";

import TimeListRow from "./TimeListRow";

import "../../styles/components/TimeList.css";

// sort helpers
const numSort = (list, sortKey) => list.sort((a, b) => a[sortKey] - b[sortKey]);
const alphaSort = (list, sortKey) =>
  list.sort((a, b) =>
    a[sortKey] < b[sortKey] ? -1 : a[sortKey] > b[sortKey] ? 1 : 0
  );

export default class TimeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortKey: "savedAt",
      reverse: false
    };
  }
  render() {
    return (
      <div className="timeList">
        <div className="timeList__table">
          <table>
            <thead className="timeList__headers">
              <tr>
                {this.header("savedAt")}
                {this.header("time")}
                {this.header("label")}
              </tr>
            </thead>
            <tbody>
              {this.sortTimes().map(time => (
                <TimeListRow time={time} key={time.id} />
              ))}
            </tbody>
          </table>
          <p className="info">* Double-click to edit Labels</p>
        </div>
        <button className="btn" onClick={actions.removeAllTimes}>
          Clear
        </button>
        <button className="btn" onClick={exportTimes}>
          Export
        </button>
        <label htmlFor="upload" className="btn">
          Import
        </label>
        <input
          type="file"
          id="upload"
          onChange={importTimes}
          accept="application/json"
        />
      </div>
    );
  }
  // listeners
  changeSort = sortKey => e => {
    e.preventDefault();
    const reverse =
      sortKey === this.state.sortKey ? !this.state.reverse : false;
    this.setState({ sortKey, reverse });
  };
  // helpers
  sortTimes = () => {
    const { times } = this.props;
    const { sortKey, reverse } = this.state;
    const sort = sortKey === "label" ? alphaSort : numSort;
    const sorted = sort(times, sortKey);
    return reverse ? sorted.reverse() : sorted;
  };
  header = key => {
    const { sortKey, reverse } = this.state;
    const sortArrow = reverse ? "^" : "v";
    const title = key[0].toUpperCase() + key.slice(1);
    return (
      <th onClick={this.changeSort(key)}>
        {title} {sortKey === key && sortArrow}
      </th>
    );
  };
}
