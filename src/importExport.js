import { store } from "./store";

export const exportTimes = _ => {
  // prep file
  const blob = new Blob([JSON.stringify(store().times)], {
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
