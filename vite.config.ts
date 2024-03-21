import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        background: "src/background/service-worker.ts",
        popup: "src/popup/popup.ts",
        options: "src/options/options.ts",
        contentScript: "src/content/contentScript.ts",
        react: "src/react/index.tsx",
        contentScriptChat: "src/content/contentScript-chat.tsx"
      },

      output: {
        entryFileNames: "js/[name].js",
        assetFileNames: "assets/[name].[ext]"
      }

    }
  }
})
