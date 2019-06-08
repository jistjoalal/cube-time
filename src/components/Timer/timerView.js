import React from "react";

import Time from "../Time";

export default ({ time, start, stop, label, changeLabel }) => (
  <div>
    <h2>Timer:</h2>
    <p>Space-Up to start, Space-Down to stop.</p>
    <label>
      Label:
      <input type="text" value={label} onChange={changeLabel} />
    </label>
    <Time time={time} />
    <button onClick={start}>Start</button>
    <button onClick={stop}>Stop</button>
  </div>
);
