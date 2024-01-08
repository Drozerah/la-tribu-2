// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import { ViteMinifyPlugin } from 'vite-plugin-minify'
import autoprefixer from 'autoprefixer'
import postCssCombineMediaQuery from 'postcss-combine-media-query'

console.log(`[NODE_ENV] ${process.env.NODE_ENV}`) // !DEBUG
const isProduction = () => process.env.NODE_ENV === "production" ? true : false

export default defineConfig({
  build: {
    outDir: resolve(__dirname, "./dist"),
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
    minify: isProduction() // minify ouput css/js or not
  },
  plugins: isProduction() ? [ViteMinifyPlugin({})] : [], // minify ouput html or not
  css: {
    postcss: {
      plugins: [
        autoprefixer({flexbox:true}),
        postCssCombineMediaQuery()
      ]
    }
  } 
})