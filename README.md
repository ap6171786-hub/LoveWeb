# Forever Yours, Strawberry

A complete responsive anniversary experience built with React, Vite, Framer Motion, Canvas Confetti, and an optional Express/MongoDB API.

## Install

```powershell
npm install
```

## Run the website

```powershell
npm run dev
```

Open the local URL printed by Vite.

## Run the optional backend

```powershell
npm run server
```

The API works without MongoDB. To enable MongoDB:

```powershell
$env:MONGODB_URI="mongodb://127.0.0.1:27017/loveweb"
npm run server
```

## Personalize

- Edit names, dates, letter, timeline, reasons, quiz, and photo captions in `src/data/loveConfig.js`.
- Add personal images to `public/photos/` and set a photo object's `src` to `/photos/your-image.jpg`.
- Add background music to `public/music/` and update `src/components/AudioPlayer.jsx` to load it with an HTML `<audio>` element. The current gentle built-in melody starts only after the surprise is opened.
- For a production build:

```powershell
npm run build
npm run preview
```
