import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Fix for windows hot reload
  watch: {
    usePolling: true,
  },
  // Needed for the Docker Container port mapping to work
  host: true,
  strictPort: true,
  port: 5173,
})