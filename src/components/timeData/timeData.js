import React from "react";

import { withStore } from "../../store";

import Stats from "./Stats";
import TimeList from "./TimeList";

export default () => (
  <div>
    {withStore("times", Stats)}
    {withStore("times", TimeList)}
  </div>
);
