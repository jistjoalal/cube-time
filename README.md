# Cube-time

A simple rubik's cube timer/log.

Check it out [here](https://cube-time.netlify.com/).

## Develop

```bash
git clone https://github.com/jistjoalal/cube-time
cd cube-time
npm install
npm start
```

## Deploy

```bash
npm run build
# staging (optional)
netlify deploy --dir=./build
# production
netlify deploy --prod --dir=./build
```

## dev notes/todos

- leave a note on a time
- export saved times to file
- integration tests
- PWAify
- sort times

## feature ideas

- progress charts
  - track avgs and bests over time
- flash screen / sound trigger (previous finishes)
  - like ghost runs in racing games
- paginate times?
- DB-based storage?
  - some way of syncing of offline/online storage would be cool
  - user accounts for online storage
    - make times "official" by linking video
- feature request form
