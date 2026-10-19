import react from '@vitejs/plugin-react'
import { defineConfig, transformWithOxc } from 'vite'

const jsxEmArquivosJs = {
  name: 'jsx-em-arquivos-js',
  enforce: 'pre',
  async transform(codigo, id) {
    if (!/\/src\/.*\.js$/.test(id.replaceAll('\\', '/'))) return null

    return transformWithOxc(codigo, id, {
      lang: 'jsx',
      jsx: { runtime: 'automatic' },
    })
  },
}

export default defineConfig({
  plugins: [jsxEmArquivosJs, react()],
  optimizeDeps: {
    noDiscovery: true,
    include: [
      'react',
      'react-dom',
      'react-dom/client',
      'react/jsx-runtime',
      'react/jsx-dev-runtime',
    ],
  },
})
