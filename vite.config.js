import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    // Avisar si un chunk supera 500KB
    chunkSizeWarningLimit: 500,

    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Three.js y todo el ecosistema 3D (~1.5MB sin split)
          if (id.includes('node_modules/three') ||
              id.includes('node_modules/@react-three') ||
              id.includes('node_modules/@react-spring')) {
            return 'vendor-three'
          }

          // Framer Motion
          if (id.includes('node_modules/framer-motion')) {
            return 'vendor-motion'
          }

          // React core
          if (id.includes('node_modules/react') ||
              id.includes('node_modules/react-dom') ||
              id.includes('node_modules/scheduler')) {
            return 'vendor-react'
          }

          // i18n
          if (id.includes('node_modules/i18next') ||
              id.includes('node_modules/react-i18next')) {
            return 'vendor-i18n'
          }

          // Resto de node_modules en un chunk genérico
          if (id.includes('node_modules')) {
            return 'vendor-misc'
          }
        }
      }
    }
  }
})
