import React from "react";
import TimeData from "./TimeData";

import { withStore } from "../../store";

export default () => <div>{withStore("times", TimeData)}</div>;
