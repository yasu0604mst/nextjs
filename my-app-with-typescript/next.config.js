module.exports = {
  assetPrefix: '/nextjs',
  trailingSlash: true,
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
