const isGithubPages = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? '/personal-website' : '',
  assetPrefix: isGithubPages ? '/personal-website/' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
