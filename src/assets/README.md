# `src/assets/` — local images

These files are imported by `src/data/content.js` and bundled by Vite.

| File           | Used by             | Recommended size / orientation                  |
| -------------- | ------------------- | ----------------------------------------------- |
| `hero.png`     | Hero portrait       | Portrait, transparent or clean background, ~900×1200 |
| `about.png`    | About section image | Portrait, ~900×1200                             |
| `services.png` | Services portrait   | Portrait, ~800×1100                             |

## To replace a photo

Just overwrite the file with your own image **keeping the same filename**.
Vite hot-reload will pick it up automatically.

If you want a different filename, also update the matching `import` lines in
`src/data/content.js`.

## Why local files?

Imported assets get fingerprinted (e.g. `hero-Ax08saKH.png`) and served with
long-lived cache headers in production. They also keep your site working
offline.
