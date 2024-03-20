import {defineConfig} from "vitest/config"
import react from "@vitejs/plugin-react"
import dotenv from 'dotenv'
dotenv.config() // load env vars from .env

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    port: process.env.REACT_PORT,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests",
    mockReset: true,
  },
})
