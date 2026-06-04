# TODO - Render deployment fixes

- [x] Fix TS18003 by updating `tsconfig.app.json` (`include` so inputs are always found in Render).
- [ ] Fix Vite build-html failure: `Failed to resolve /src/main.tsx from /opt/render/project/src/index.html`.
      - [ ] Ensure `index.html` in repo root references the correct entry in a way Render supports.
      - [ ] Commit and push `index.html`.
      - [ ] Redeploy on Render.

