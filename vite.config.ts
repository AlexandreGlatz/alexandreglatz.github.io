import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: './dist',  // Ensure this matches the outDir in tsconfig.json
  },
  base: '/alexandreglatz.github.io/',  // Set this to your repo name if deploying to GitHub Pages
});