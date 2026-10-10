import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/runpy21-portfolio-new/',
  plugins: [react(), tailwindcss()],
})
