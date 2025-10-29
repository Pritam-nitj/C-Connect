import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Or your framework plugin (e.g., vue)
import path from 'path' // <-- Import the path module

export default defineConfig({
  plugins: [react()],
  // Add the resolve object below
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  }
})

