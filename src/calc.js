export const calcAvg = times =>
  ~~(times.reduce((a, { time }) => a + time, 0) / times.length) || Infinity;

export const calcAvgN = (times, n) =>
  times.length >= n ? calcAvg(times.slice(0, n)) : Infinity;

export const calcBest = times =>
  times.reduce((a, { time }) => (time < a ? time : a), Infinity);

// calc best n of last m trials
export const calcBestN = (times, n, m) =>
  times.length >= m
    ? calcAvg(
        times
          .slice(0, m)
          .sort((a, b) => a.time - b.time)
          .slice(0, n)
      )
    : Infinity;
