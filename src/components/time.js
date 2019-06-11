import React from "react";

const pad = (s, n) => (s + "").padStart(n, 0);

export default ({ time, ...rest }) => {
  if (time === Infinity) return <span>∞</span>;

  const m = pad(~~(time / 60000), 2);
  const s = pad(~~(time / 1000) % 60, 2);
  const ms = pad(time % 1000, 3);

  return (
    <span {...rest}>
      {m}:{s}:{ms}
    </span>
  );
};
