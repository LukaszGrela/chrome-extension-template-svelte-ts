import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    rollupOptions: {
      input: ['popup.html', 'src/background.ts'],
      output: {
        entryFileNames: 'js/[name].js',
        assetFileNames: 'assets/[name][extname]',
        dir: 'extension',
      },
    },
  },
});
