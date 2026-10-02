# Portfolio

My personal portfolio. One page, built with React and Vite.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
```

## Update it

All content lives in `src/data/profile.js`. Edit the text there and the site updates.

- Add a project: add an object to `projects`. Include `repo` or `live` to show a link.
- Change availability: edit `status`, or set it to `""` to hide it.
- Colors and fonts: the tokens at the top of `src/styles.css`.
