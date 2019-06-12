import React from "react";

import { actions } from "../../store";
import { exportTimes } from "../../importExport";

import TimeListRow from "./TimeListRow";

import "../../styles/components/TimeList.css";

export default ({ times }) => (
  <div className="timeList">
    <div className="timeList__table">
      <table>
        <thead className="timeList__headers">
          <tr>
            <th>X</th>
            <th>Time</th>
            <th>Label</th>
          </tr>
        </thead>
        <tbody>
          {times.map(time => (
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
  </div>
);
