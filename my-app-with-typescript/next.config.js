module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/profile': { page: '/profile' },
      '/portfolio': { page: '/portfolio'},
      '/contact': { page: '/contact' }
    }
  },
}
