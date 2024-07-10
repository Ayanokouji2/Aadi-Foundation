import { defineConfig,loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from'vite-plugin-mkcert'

export default defineConfig(({mode})=>{
  const env = loadEnv(mode,process.cwd(),'');
  return{
    define:{
      'process.env':env
    },
    server:{
      https: true
    },
    plugins: [react(), mkcert()],
  }
})