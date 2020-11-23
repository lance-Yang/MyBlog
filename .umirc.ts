import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  history: {
    type: 'hash',
  },
  plugins: [],
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  base: '/MyBlog/',
  publicPath: '/MyBlog/',
  outputPath: '/dist',
});
