import React from "react";

import { calcAvg, calcAvgN, calcBest, calcBestN } from "../../calc";

import Time from "../Time";

import "../../styles/components/Stats.css";

const Stat = (title, time) => (
  <tr className="stats__stat">
    <td>
      <strong>{title}: </strong>
    </td>
    <td>
      <Time time={time} />
    </td>
  </tr>
);

export default ({ times }) => (
  <table className="stats">
    <tbody>
      {Stat("Avg", calcAvg(times))}
      {Stat("Avg5", calcAvgN(times, 5))}
      {Stat("Avg10", calcAvgN(times, 10))}
      {Stat("Best", calcBest(times))}
      {Stat("3 of 5", calcBestN(times, 3, 5))}
      {Stat("10 of 12", calcBestN(times, 10, 12))}
    </tbody>
  </table>
);
