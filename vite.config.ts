import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
      ]
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: 'src/main.ts'
      },
      output: {
        sourcemap: true,
        entryFileNames: 'js/main.js',
        chunkFileNames: 'js/[name].js',
        assetFileNames: 'public/[name][extname]',
      },
      external: [
        "@fortawesome/fontawesome-free",
      ]
    },
    outDir: resolve(__dirname, 'source'),
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
      '@': resolve(__dirname, 'src'),
    },
  },
  assetsInclude: ['**/*.ejs'],
})
