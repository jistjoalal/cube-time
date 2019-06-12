import React from "react";

import { actions } from "../../store";

import Time from "../Time";

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
          {times.map((time, i) => (
            <tr className="timeList__row" key={i}>
              <td className="timeList__del">
                <button onClick={() => actions.removeTime(time)}>
                  &times;
                </button>
              </td>
              <td>
                <Time time={time.time} />
              </td>
              <td>{time.label}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <button className="btn" onClick={actions.removeAllTimes}>
      Clear
    </button>
  </div>
);
