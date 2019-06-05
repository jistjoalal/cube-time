import React from "react";
import uuidv4 from "uuid/v4";

export const store = _ => {
  return (
    JSON.parse(localStorage.getItem("store")) || {
      times: []
    }
  );
};

export const set = changes => {
  localStorage.setItem("store", JSON.stringify({ ...store(), ...changes }));
  // dispatch custom event for reactivity
  window.dispatchEvent(new Event("store"));
};

export const actions = {
  saveTime: time => {
    const times = store().times;

    const nTime = {
      time,
      id: uuidv4(),
      savedAt: Date.now()
    };
    const nTimes = [nTime, ...times];

    set({ times: nTimes });
  },
  removeTime: time => {
    const times = store().times;

    const nTimes = times.filter(({ id }) => time.id !== id);

    set({ times: nTimes });
  },
  removeAllTimes: () => {
    set({ times: [] });
  }
};

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

export const withStore = (storeKey, Child) => (
  <Tracker Child={Child} storeKey={storeKey} />
);
