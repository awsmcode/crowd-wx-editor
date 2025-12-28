import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Browser-Bundle-Konfiguration - enthält alles (inkl. React)
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
    'process.env': '{}',
  },
  build: {
    copyPublicDir: false,
    outDir: 'dist',
    lib: {
      entry: resolve(__dirname, 'src/main.tsx'),
      name: 'CrowdWxEditor',
      fileName: 'crowd-wx-editor',
      formats: ['iife'], // IIFE für direkte Browser-Nutzung
    },
    rollupOptions: {
      // React und ReactDOM werden MIT gebündelt (nicht external)
      output: {
        // CSS-Datei als crowd-wx-editor.css ausgeben
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'crowd-wx-editor.css'
          }
          return 'assets/[name]-[hash][extname]'
        }
      },
    },
    cssCodeSplit: false, // Alle CSS in eine Datei
  },
})

