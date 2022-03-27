import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import viteCompression from 'vite-plugin-compression'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Components({
      resolvers: [NaiveUiResolver()],
    }),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
  // 引用别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  // 配置全局注入样式，不需要任何引入可以直接使用全局scss定义的变量
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/style/main.scss";',
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true,
    https: false,
    proxy: {},
  },
  // 生产环境去除debugger
  build: {
    terserOptions: {
      compress: {
        // eslint-disable-next-line camelcase
        drop_console: true,
        // eslint-disable-next-line camelcase
        drop_debugger: true,
      },
    },
  },
})
