import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server : {
    proxy : {
      '/socket.io' : {
        target : "https://chatapp-backend-alpha.vercel.app" ,
        changeOrigin : true ,
        secure : true,
        ws:true
      }
    }
  },
  plugins: [react()],
})
