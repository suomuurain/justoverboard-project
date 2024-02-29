export default {
  root: './source',
  resolve: {
    alias: {
      '~bootstrap': 'node_modules/bootstrap',
    }
  },
  server: {
    port: 8080,
    hot: true
  }
}