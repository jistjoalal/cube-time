import React from "react";

import { store } from "../store";

class Tracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = store();
  }
  componentDidMount() {
    // state reacts to store changes
    window.addEventListener("store", () => {
      this.setState(store());
    });
  }
  render() {
    const { Child } = this.props;
    return (
      <div>
        <Child {...this.state} />
      </div>
    );
  }
}

export default Child => <Tracker Child={Child} />;
