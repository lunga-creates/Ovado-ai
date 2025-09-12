import crypto from 'crypto'

// Polyfill for Node.js 21 (fixes Vite crash)
if (!crypto.hash) {
  crypto.hash = (alg, data) => {
    return crypto.createHash(alg).update(data).digest('hex') // return string, not Buffer
  }
}

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
