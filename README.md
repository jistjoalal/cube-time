# Cube-time

A simple rubik's cube timer/log.

- See your **best** times, **average** times, **competition** times all at a glance.
- **Filter/organize** your times to drill in on those PLL algos dragging down your time.
- Don't waste milliseconds with other timers! Cube Time starts the clock when your hands leave the space bar, and stops it as soon as you touch it again.
- Own your data! Times saved to your browser's storage. **Import/Export** your times with the click of a button.
- Open source, minimalist, and modern design. Bootstrapped with [CRA](https://github.com/facebook/create-react-app). Need a feature and know React? Fork the repo and code it up!

## Demo

[![Screenshot](https://jist-screenshotter.herokuapp.com/v1/desktop/https://cube-time.netlify.com/)](https://cube-time.netlify.com/)

## Develop

```bash
git clone https://github.com/jistjoalal/cube-time
cd cube-time
npm install
npm start
```

## Deploy

Using netlify continuous deployment

```bash
https://app.netlify.com/
> New site from Git
> Select Repo
```

- That's it! Pushes to `origin/master` will trigger deployments automatically.

## dev notes/todos

- integration tests

## feature ideas

- practice algos
  - scrape/clone algdb.net into graphql API
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
- automatically update screenshot in readme somehow?
