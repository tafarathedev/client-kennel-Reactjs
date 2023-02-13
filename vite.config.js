import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from "url";
import commonjs from '@rollup/plugin-commonjs';
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "/@": resolve( __dirname, "./src/Pages/"), 
      "@": fileURLToPath(new URL("src", import.meta.url)) 
    },
  } , build:{
    rollupOptions:{
      plugins:[
        resolve() ,
        commonjs() 
		
      ]
    }, 
    optimizeDeps: {
      include: ["@apollo/client/core", "@apollo/client/link/error"],
    },
  } 
})


