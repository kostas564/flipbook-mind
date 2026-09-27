# Flipbook Mind

Flipbook Mind is a free rapid-imaging practice tool inspired by William Bengston’s Image Cycling® technique. For the authentic method and training, visit [bengstonresearch.com](https://bengstonresearch.com/).

## Two modes

- **Cycle with the app:** add an image for each of your goals, then let the app show them in quick succession for a set time.
- **Train your mind:** six levels that take the images away step by step, until you can cycle your list in your head, eyes closed. Includes a memory quiz.

## Your list

- Drag the ⠿ handle to reorder items (or focus it and use the arrow keys). Training follows this order.
- Tap an item to add a caption, replace its image, or move it.
- **Back up** saves your whole list (images included) as a file; **Restore** loads it again, on this device or another.

## Flashing safety

- The first time the app opens, it shows a photosensitivity warning that must be acknowledged before use.
- Speed is capped at 3 images per second (the WCAG 2.3.1 flash threshold). Faster speeds, up to 10 per second, are only available after turning on **Allow fast speeds** and confirming a warning. The opt-in is never restored from a backup file.
- If the device’s Reduce Motion setting is on, speed is limited to 1 image per second and fast speeds can’t be turned on.
- Images crossfade (120 ms, shorter at fast speeds so each fade finishes before the next image) instead of cutting hard, text cards avoid saturated reds, and full screen is off by default.
- Tapping or clicking anywhere during a session stops it straight away.

## Privacy

Your images never leave your device. They are stored in your browser (IndexedDB) and are not uploaded anywhere. The app makes no network requests to anyone else: no analytics, and the fonts are included in the app rather than loaded from a font service.
Browsers can clear site data, and Safari does so for sites unused for 7 days, so back up your list or install the app.

## Install / offline

The app is a PWA: use "Install app" (Chrome, Edge, Android) or Share → "Add to Home Screen" (iPhone). It then works offline and keeps your list safer from browser clean-up.

## Running it

It's a static site with no build step: `index.html`, plus `sw.js`, `manifest.webmanifest`, icons and the `fonts/` folder for offline/install support.
Serve the folder over HTTP (e.g. `npx http-server .`) or use the hosted version on GitHub Pages. Opening `index.html` directly from disk works too, without offline support.

When you change the app, bump `VERSION` in `sw.js` so installed copies pick up the new files.

Internal storage keys (`image-cycling` database, `ic-` settings) keep their old names on purpose, so existing lists carry over.

## Disclaimer

This is a personal, unofficial project. It isn’t affiliated with or endorsed by William Bengston, Bengston Research or L & B Consulting, Inc. “Image Cycling” and “The Bengston Energy Healing Method” are registered trademarks of L & B Consulting, Inc.

This app is not medical advice and doesn’t diagnose, treat or cure anything. If you have a health concern, see a doctor.

**Flashing:** the app flashes images rapidly. If you have epilepsy or photosensitivity, use slow speeds and stop if you feel unwell.

Provided free, as is, without warranty. You use it at your own risk. Nothing is stored on any server and no data is collected. Your images stay on your device.

## Licence

The code is released under the [MIT Licence](LICENSE). The bundled fonts, Fraunces and Inter, are under the SIL Open Font License 1.1 (see `fonts/`).
