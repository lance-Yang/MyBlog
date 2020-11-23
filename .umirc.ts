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
  base: '/',
  // publicPath: 'https://lance-yang.github.io/lance-Yang/MyBlog',
  // outputPath: './dist',
});
