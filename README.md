# Spiritual Gifts Assessment

Static React app designed to run from `index.html` in the root of a GitHub Pages repository.

Upload these files to the root of your repo:

```text
/index.html
/app.jsx
```

Then enable GitHub Pages from Settings > Pages > Deploy from a branch > main > /root.

Storage note: the original JSX used `window.storage`, which does not work on a normal GitHub Pages site. This version uses `localStorage`, so results save in the visitor's browser only. To collect results centrally, connect Google Sheets, Firebase, Supabase, or another backend.
