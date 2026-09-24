import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about/index.html'),
        'bim-outsourcing': resolve(__dirname, 'bim-outsourcing/index.html'),
        architecture: resolve(__dirname, 'services/architecture/index.html'),
        'bim-revit': resolve(__dirname, 'services/bim-revit/index.html'),
        'cad-drafting': resolve(__dirname, 'services/cad-drafting/index.html'),
        'interior-design': resolve(__dirname, 'services/interior-design/index.html'),
        '3d-visualization': resolve(__dirname, 'services/3d-visualization/index.html'),
        'building-services': resolve(__dirname, 'services/building-services/index.html'),
      },
    },
  },
});
