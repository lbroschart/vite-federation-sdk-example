import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host',
      shared: {
        react: {
          singleton: true
        },
        'react-dom': {
          singleton: true
        },
        'example-sdk': {
          singleton: true
        }
      }
    })
  ],
  build: {
    target: 'esnext'
  }
})
