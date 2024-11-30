import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {federation} from "@module-federation/vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
  },
  plugins: [react(),
    federation({
      name: "remote",
      filename: "remoteEntry.js",
      shared: ["react", "react-dom"]
    })],
})
