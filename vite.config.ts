import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

const rootDir = import.meta.dirname;

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(rootDir, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(rootDir, 'index.html'),
          privacy: path.resolve(rootDir, 'privacy/index.html'),
          terms: path.resolve(rootDir, 'terms/index.html'),
          help: path.resolve(rootDir, 'help/index.html'),
        },
      },
    },
  };
});
