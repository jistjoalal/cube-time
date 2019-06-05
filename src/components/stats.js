import React from "react";

import { calcAvg, calcAvgN, calcBest, calcBestN } from "../calc";

import Time from "./time";

const Stat = (title, time) => (
  <div>
    <strong>{title}: </strong>
    <Time time={time} />
  </div>
);

export default ({ times }) => (
  <div>
    <h2>Stats:</h2>
    {Stat("Avg", calcAvg(times))}
    {Stat("Avg5", calcAvgN(times, 5))}
    {Stat("Avg10", calcAvgN(times, 10))}
    {Stat("Best", calcBest(times))}
    {Stat("3 of 5", calcBestN(times, 3, 5))}
    {Stat("10 of 12", calcBestN(times, 10, 12))}
  </div>
);
