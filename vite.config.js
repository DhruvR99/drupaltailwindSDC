import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(), // Adds Tailwind CSS v4 support
  ],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'src/css/style.css',
      output: {
        assetFileNames: '[name][extname]',
      },
    },
  }
});
