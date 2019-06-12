import { store, set } from "./store";

export const exportTimes = _ => {
  // prep file
  const data = JSON.stringify(store().times, null, 2);
  const blob = new Blob([data], {
    type: "application/json"
  });
  const exportLink = document.createElement("a");
  exportLink.href = URL.createObjectURL(blob);
  exportLink.download = `cube-time-${new Date().toLocaleString()}.json`;
  exportLink.style.display = "none";

  // save file >:D
  document.body.appendChild(exportLink);
  exportLink.click();
  document.body.removeChild(exportLink);
};

export const importTimes = e => {
  const [file] = e.target.files;
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    const times = JSON.parse(reader.result);
    validateTimes(times);
    // import to store
    set({ times });
  };
  reader.readAsText(file);
};

const validateTimes = times => {
  const err = "Imported times must be valid format";
  if (!Array.isArray(times)) throw new Error(err);
  times.forEach(time => {
    if (
      typeof time !== "object" ||
      typeof time.id !== "string" ||
      typeof time.label !== "string" ||
      typeof time.savedAt !== "number" ||
      typeof time.time !== "number"
    )
      throw new Error(err);
  });
};
