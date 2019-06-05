import React from "react";

import { withStore } from "../../store";

import Stats from "./stats";
import TimeList from "./timeList";

export default () => (
  <div>
    {withStore("times", Stats)}
    {withStore("times", TimeList)}
  </div>
);
