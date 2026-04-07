import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    chunkSizeWarningLimit: 600,

    rollupOptions: {
      output: {
        // Forma objeto: Rollup gestiona las dependencias automáticamente,
        // evitando las dependencias circulares que causa la forma función.
        // NO separamos react/react-dom: deben estar disponibles antes que
        // cualquier otro vendor para evitar la pantalla en negro en producción.
        manualChunks: {
          'vendor-three': [
            'three',
            '@react-three/fiber',
            '@react-three/drei',
            '@react-three/cannon',
            '@react-three/postprocessing'
          ],
          'vendor-motion': ['framer-motion'],
          'vendor-i18n': ['i18next', 'react-i18next']
        }
      }
    }
  }
})
