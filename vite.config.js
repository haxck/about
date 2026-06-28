import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'github' ? '/about/' : '/',
  plugins: [vue(),tailwindcss()],
}));