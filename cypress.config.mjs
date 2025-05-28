import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://frontend:5173',
    supportFile: false,
  },
});
