import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from "url";
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "/@": resolve( __dirname, "./src"),
      "@": fileURLToPath(new URL("src", import.meta.url))
    },
  } , build:{
    rollupOptions:{
      plugins:[
        resolve()
      ]
    }
  } 
})


