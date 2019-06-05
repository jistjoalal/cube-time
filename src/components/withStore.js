import React from "react";

import { store } from "../store";

class Tracker extends React.Component {
  constructor(props) {
    super(props);
    const { storeKey } = props;
    this.state = {
      [storeKey]: store()[storeKey]
    };
  }
  componentDidMount() {
    // state reacts to store changes
    window.addEventListener("store", () => {
      const { storeKey } = this.props;
      this.setState({
        [storeKey]: store()[storeKey]
      });
    });
  }
  render() {
    const { Child } = this.props;
    return <Child {...this.state} />;
  }
}

export default (storeKey, Child) => (
  <Tracker Child={Child} storeKey={storeKey} />
);
