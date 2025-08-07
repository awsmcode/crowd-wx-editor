import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { execSync } from 'node:child_process'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Plugin to ensure types are generated after Vite build
const typesPlugin = () => {
  return {
    name: 'types-preservation',
    closeBundle() {
      // Ensure types directory exists and regenerate types if needed
      const typesDir = resolve(__dirname, 'dist/lib/types')
      if (!existsSync(typesDir)) {
        console.log('Regenerating TypeScript declarations...')
        execSync('npx tsc --p ./tsconfig.module.build.json', { stdio: 'inherit' })
      }
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), typesPlugin()],
  build: {
    copyPublicDir: false,
    outDir: 'dist/lib', // Nur Library-Ausgabe
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'CrowdWxEditor',
      // the proper extensions will be added
      fileName: 'crowd-wx-editor',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        // CSS-Datei als styles.css ausgeben
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'styles.css'
          }
          return 'assets/[name]-[hash][extname]'
        }
      },
    },
    // CSS-Handling konfigurieren
    cssCodeSplit: false, // Alle CSS in eine Datei
  },
})
