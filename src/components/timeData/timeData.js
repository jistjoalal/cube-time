import React from "react";

import withStore from "../withStore";

import Stats from "./stats";
import TimeList from "./timeList";

export default () => {
  return (
    <div>
      {withStore(Stats)}
      {withStore(TimeList)}
    </div>
  );
};
