import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eruda from 'vite-plugin-eruda'
import { createHtmlPlugin } from 'vite-plugin-html'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eruda({
      debug: true,
    }),
    // ...createHtmlPlugin({
    //   template: 'public/index.html',
    //   minify: true,
    //   entry: 'src/main.ts',
    // })
  ],
  server: {
    host: true,
    port: 3000,
    strictPort: true,
    open: true,
    // proxy,
  },
  preview: {
    host: true,
    port: 4000,
    strictPort: true,
    open: true,
    // proxy,
  },
})
