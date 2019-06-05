import React from "react";

import { actions } from "../../store";

import Time from "../Time";

import "./TimeList.css";

export default class TimeList extends React.Component {
  render() {
    const { times } = this.props;
    return (
      <div>
        <h2>Times:</h2>
        <button onClick={actions.removeAllTimes}>Clear</button>
        <div className="timeList">
          <table>
            <tbody>
              {times.map((time, i) => (
                <tr key={time.savedAt}>
                  <td>{times.length - i}</td>
                  <td>
                    <Time time={time.time} />
                  </td>
                  <td>
                    <button onClick={() => actions.removeTime(time)}>X</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
