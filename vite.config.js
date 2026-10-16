import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuration de build : le plugin React gère JSX et fast refresh.
export default defineConfig({
  plugins: [react()],
})
