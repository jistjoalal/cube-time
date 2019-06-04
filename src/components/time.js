import React from "react";

export default ({ time }) => {
  const pad = (s, n) => (s + "").padStart(n, 0);
  const m = pad(~~(time / 60000), 2);
  const s = pad(~~(time / 1000) % 60, 2);
  const ms = pad(time % 1000, 3);

  return (
    <span>
      {m}:{s}:{ms}
    </span>
  );
};
