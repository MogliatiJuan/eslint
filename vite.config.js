import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      external: ['module']
    },
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'eslint-config-global',
      fileName: 'eslint-config-global'
    }
  }
})
