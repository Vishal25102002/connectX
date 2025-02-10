import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://44.203.87.203:8001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // This removes '/api' from the request path
      },
    },
  },
});
