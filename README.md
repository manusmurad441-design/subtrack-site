# SubTrack website

Official presentation and download website for the SubTrack Android app.
Vite + React + TypeScript + Tailwind. Static output, no backend.

## Run locally

```bash
npm install
npm run dev
```

## Build & deploy

```bash
npm run build
```

Deploy the `dist/` folder to Vercel (or any static host). `vercel.json` adds a
rewrite so `/privacy` and `/license` work on a direct load/refresh, since this
is a client-side-routed single page app.

## The real APK

Your uploaded `SubTrack.apk` is already at `public/downloads/SubTrack.apk` and
the Download buttons link straight to `/downloads/SubTrack.apk` — a normal
`<a href download>` link, no JS, no API route. To ship a new build, just
overwrite that file (keep the same name).

## Things pulled from your real APK — please double-check

I read these directly out of the APK's `AndroidManifest.xml`, they are not
invented, but a few of them are worth your attention before you publish:

- **Package name:** `com.aistudio.subtrack.wvkxqz`
- **Version:** versionName `1.0`, versionCode `1`
- **Min / target SDK:** Android 7.0+ (minSdk 24), targetSdk 36
- **Permissions requested:** `INTERNET`, `ACCESS_NETWORK_STATE`,
  `USE_BIOMETRIC`, `USE_FINGERPRINT`
- **`android:debuggable="true"`** — this build is flagged as debuggable in
  the manifest. That's normal for a debug/test build but not something you'd
  usually ship as the official release. Worth confirming this is the build
  you actually want on the download page.
- **Firebase Auth, Firestore, and Google Sign-In components are bundled in
  the APK**, alongside the biometric permissions. Your brief said not to
  invent accounts, cloud sync, or biometric-lock features — I didn't add any
  of that to the marketing copy — but the manifest suggests the app may
  genuinely have sign-in / cloud sync / biometric app-lock. I left the
  features section limited to what you described (name, price, currency,
  billing period) and flagged the rest as `[CONFIRM WITH DEVELOPER]` in
  `src/pages/Privacy.tsx` rather than guessing. If those features are real,
  tell me and I'll add them to the features section and rewrite the privacy
  policy properly — a privacy policy that omits real data collection would
  be a real problem, not just a copy issue.
- I could not cleanly extract the app's launcher icon from the APK (the
  embedded `.webp` icon didn't decode correctly), so the site currently uses
  a simple generic mark instead of your real icon. Drop a real icon at
  `public/favicon.svg` (or swap in a `.png` + update `index.html`) if you'd
  like your actual icon used.

## Screenshots

No real screenshots were provided, so the Screenshots section shows clearly
labeled placeholder slots instead of fake images. Add real files at:

```
public/images/subtrack-home.png
public/images/subtrack-add.png
public/images/subtrack-settings.png
```

and swap the placeholder `<div>` blocks in `src/pages/Home.tsx` for `<img>`
tags once they exist.

## Still needs your input before this goes live

- `src/pages/Privacy.tsx` — data storage, third-party services, data
  sharing, and contact email are all left as `[CONFIRM WITH DEVELOPER]` /
  `[CONTACT EMAIL]` placeholders on purpose.
- `src/pages/License.tsx` — assumes MIT License with a `[COPYRIGHT HOLDER]`
  placeholder; replace or swap license text if that's wrong.
