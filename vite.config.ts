import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
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
      '@': resolve(__dirname, 'components'),  // Alias for Vue components
    },
  },
  assetsInclude: ['**/*.ejs'],
})
