import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // Allows external access (e.g., via ngrok)
    cors: true, // Enable CORS to allow requests from ngrok
    origin: 'https://1b21-223-184-224-66.ngrok-free.app', // Replace with your ngrok URL
  },
})