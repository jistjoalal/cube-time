# Cube-time

A simple rubik's cube timer/log.

- See your **best** times, **average** times, **competition** times all at a glance.
- **Filter/organize** your times to drill in on those PLL algos dragging down your time.
- Don't waste milliseconds with other timers! Cube Time starts the clock when your hands leave the space bar, and stops it as soon as you touch it again.
- Open source, minimalist, and modern design. Bootstrapped with [CRA](https://github.com/facebook/create-react-app). Need a feature and know React? Fork the repo and code it up!

## Demo

[https://cube-time.netlify.com/](https://cube-time.netlify.com/)

[![screenshot](https://i.imgur.com/LXSRAbS.png)](https://cube-time.netlify.com/)

## Develop

```bash
git clone https://github.com/jistjoalal/cube-time
cd cube-time
npm install
npm start
```

## Deploy

```bash
# staging (optional)
npm run deploy-staging
# production
npm run deploy
```

## dev notes/todos

- integration tests
- PWAify
- sort times

## feature ideas

- progress charts
  - track avgs and bests over time
- flash screen / sound trigger (previous finishes)
  - like ghost runs in racing games
  - set custom thresholds/alerts
- paginate times?
- DB-based storage?
  - some way of syncing of offline/online storage would be cool
  - user accounts for online storage
    - make times "official" by linking video
- feature request form
