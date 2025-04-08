import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  base: '/docs/',
  plugins: [vue()],
  build: {
    outDir: './docs',  // Ensure this matches the outDir in tsconfig.json
    assetsInlineLimit: 0,
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js',
      '@': resolve(__dirname, 'src')
    }
  },
});