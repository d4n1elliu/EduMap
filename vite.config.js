import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), tailwindcss()
  ],
  build: {
    rollupOptions: {
      output: {
        // Split large libraries into their own cached files.
        // Only plain leaflet goes in its chunk: react-leaflet needs React to load first,
        // so it stays in the app chunk.
        manualChunks(id) {
          if (/node_modules\/leaflet\//.test(id)) return 'leaflet'
          if (/node_modules\/(react|react-dom|react-router|react-router-dom|scheduler)\//.test(id)) return 'react'
        },
      },
    },
  },
})
