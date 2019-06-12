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
  saveTime: ({ time, label = "Default" }) => {
    const { times } = store();

    const nTime = {
      time,
      label,
      id: uuidv4(),
      savedAt: Date.now()
    };
    const nTimes = [nTime, ...times];

    set({ times: nTimes });
  },
  editTime: nTime => {
    const { times } = store();

    const index = times.findIndex(({ id }) => nTime.id === id);
    const nTimes = [...times];
    nTimes.splice(index, 1, nTime);

    set({ times: nTimes });
  },
  removeTime: time => {
    const { times } = store();

    const nTimes = times.filter(({ id }) => time.id !== id);

    set({ times: nTimes });
  },
  removeAllTimes: () => {
    const really = window.confirm("Really remove all times?");
    if (really) set({ times: [] });
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
    const { Child, props } = this.props;
    return <Child {...this.state} {...props} />;
  }
}

export const withStore = (storeKey, Child, props) => (
  <Tracker Child={Child} storeKey={storeKey} props={props} />
);
