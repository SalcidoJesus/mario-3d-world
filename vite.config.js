import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // no sirvió lo de abajo
  esbuild: {
    drop: ['console', 'debugger'],
  },
})
