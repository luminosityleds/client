import { defineConfig } from 'vitest/config'
import macrosPlugin from "vite-plugin-babel-macros";
import react from '@vitejs/plugin-react-swc'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), macrosPlugin(), reactRefresh()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setupTests.ts',
    css: true,
    reporters: ['verbose'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*'],
      exclude: [],
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  }
})
