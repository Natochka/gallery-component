module.exports = {
  staticFileGlobs: ['build/static/css/**.css', 'build/static/js/**.js'],
  swFilePath: './build/service-worker.js',
  stripPrefix: 'build/',
  handleFetch: true,
  runtimeCaching: [
    {
      urlPattern: /.*/g,
      handler: 'networkFirst'
    }
  ]
}
