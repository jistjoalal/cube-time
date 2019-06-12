import { store } from "./store";

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
