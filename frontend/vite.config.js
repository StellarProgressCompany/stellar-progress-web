import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'  // ← Importación correcta

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Sitemap({                                   // ← Llamada al plugin
      hostname: 'https://stellarprogress.es',
      routes: [
        '/',
      ],
      changefreq: 'weekly',
      priority: 0.8
    })
  ],
  server: {
    proxy: {
      '/api': 'http://localhost:8000',          // Proxy API calls to Laravel backend
    },
    watch: {
      usePolling: true,                         // Solución para detección de cambios en sistemas de archivos
    },
    hmr: {
      overlay: false,                           // Evita que la pantalla se congele por errores menores
    }
  },
})
