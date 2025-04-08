import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/forkify', // Replace with your repo name
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // your Express backend
        changeOrigin: true,
        secure: false,
      },
    },
  }
})
