import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Force Vite to use the project-root index.html and the correct TS entry.
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
      },
    },
  },
})

