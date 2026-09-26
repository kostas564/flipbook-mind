# Image Cycling

A web app inspired by William Bengston’s image cycling.

## Two modes

- **Cycle with the app:** add an image for each of your goals, then let the app flash them rapidly for a set time.
- **Train your mind:** six levels that take the images away step by step, until you can cycle your list in your head, eyes closed. Includes a memory quiz.

## Your list

- Drag the ⠿ handle to reorder items (or focus it and use the arrow keys). Training follows this order.
- Tap an item to add a caption, replace its image, or move it.
- **Back up** saves your whole list (images included) as a file; **Restore** loads it again, on this device or another.

## Privacy

Your images never leave your device. They are stored in your browser (IndexedDB) and are not uploaded anywhere.
Browsers can clear site data, and Safari does so for sites unused for 7 days, so back up your list or install the app.

## Install / offline

The app is a PWA: use "Install app" (Chrome, Edge, Android) or Share → "Add to Home Screen" (iPhone). It then works offline and keeps your list safer from browser clean-up.

## Running it

It's a static site with no build step: `index.html`, plus `sw.js`, `manifest.webmanifest` and icons for offline/install support.
Serve the folder over HTTP (e.g. `npx http-server .`) or use the hosted version on GitHub Pages. Opening `index.html` directly from disk works too, without offline support.

When you change the app, bump `VERSION` in `sw.js` so installed copies pick up the new files.

> ⚠️ Fast cycling creates flashing images. The app warns before cycling faster than 3 images per second. If you are sensitive to flashing lights, use a slower speed.
