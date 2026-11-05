# GDG on Campus UGM — React + TypeScript + Tailwind

A responsive landing-page implementation based on the supplied Figma screenshot.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Add your own images

The image areas are intentionally placeholders. In `src/App.tsx`, find the `ImageFrame` component and the `hero-image` / `track-art` sections. Replace the placeholder `<ImageFrame />` elements with your own `<img>` elements when your assets are ready.

Example:

```tsx
<img
  src="/images/your-image.webp"
  alt="Description"
  className="h-full w-full object-cover"
/>
```

Put image files in the `public/images/` directory (create it if needed).

## Notes

- The layout is responsive and stacks sections on smaller screens.
- FAQ rows are interactive.
- Navigation links scroll to page sections.
- The contact email is a placeholder and should be replaced with the real community address.
