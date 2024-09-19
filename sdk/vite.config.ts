import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      lib: path.resolve('src/lib/'),
    }
  },
  build: {
    emptyOutDir: false,
    lib: {
      name: 'SDK',
      entry: {
        index: path.resolve(__dirname, './src/lib/index.ts'),
        'components/index': path.resolve(__dirname, './src/lib/components/index.ts')
      },
      fileName: '[name]'
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'react-dom'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
})
