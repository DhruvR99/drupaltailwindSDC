# Tailwind Drupal Theme

Tailwind is a custom Drupal theme with a responsive, mobile-first layout built
with Tailwind CSS and Vite.

## Features
- Tailwind CSS v4 build pipeline via Vite.
- Single Directory Components in `components/` (for example, header and hero).
- Standard Drupal regions defined in `tailwind.info.yml`.

## Requirements
- Drupal 10 or 11.
- Node.js and npm for asset builds.

## Install and enable
1. Place the theme at `web/themes/custom/tailwind`.
2. Enable the theme in the Drupal UI or run:
   ```bash
   drush then tailwind
   ```

## Development workflow
```bash
cd web/themes/custom/tailwind
npm install
npm run dev
```

For a production build:
```bash
npm run build
```

Optional live reload while editing templates or styles:
```bash
npm run livereload
```

## Assets
- Entry CSS: `src/css/style.css`
- Build output: `dist/style.css` (referenced in `tailwind.libraries.yml`)
- `dist/` is gitignored, so ensure the build runs during deployment if needed.

## Structure
- `components/`: SDC components and metadata.
- `templates/`: Twig templates.
- `includes/` and `tailwind.theme`: PHP hooks and preprocessors.
