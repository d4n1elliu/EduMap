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
        // Split large libraries into their own cached files
        manualChunks(id) {
          if (/node_modules\/(leaflet|react-leaflet|@react-leaflet\/core)\//.test(id)) return 'leaflet'
          if (/node_modules\/(react|react-dom|react-router|react-router-dom|scheduler)\//.test(id)) return 'react'
        },
      },
    },
  },
})
