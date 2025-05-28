// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // allows import from '@/something'
    },
  },
  server: {
    host: '0.0.0.0', // Accept connections from Docker or remote devices
    port: 5173, // Optional: override default Vite port
    strictPort: true, // Fail if port 5173 is taken
    proxy: {
      '/api': {
        target: 'http://backend:8000', // backend container name (in Docker network)
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
});
