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
  // dispatch event for reactivity in same tab
  // https://stackoverflow.com/questions/4679023/bug-with-chromes-localstorage-implementation/4679754#4679754
  window.dispatchEvent(new StorageEvent("storage", { key: "store" }));
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
