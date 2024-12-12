import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'https://s24-tiimi2-backend-s24tiimi2backend.2.rahtiapp.fi'
    }
  }
})

