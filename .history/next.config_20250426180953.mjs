let userConfig = undefined
try {
  userConfig = await import('./v0-user-next.config.mjs')
} catch (e) {
  try {
    userConfig = await import('./v0-user-next.config')
  } catch (innerError) {}
}

/** Security Headers **/
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval';
      style-src 'self' 'unsafe-inline';
      img-src 'self' data: https://*.tile.openstreetmap.org;
      frame-src 'self' https://ee-anfalalharbi826.projects.earthengine.app/view/e-analysis;
      child-src 'self' https://ee-anfalalharbi826.projects.earthengine.app/view/e-analysis;
      connect-src 'self';
      connect-src 'self' https://api-inference.huggingface.co;
    `.replace(/\n/g, ''),
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'geolocation=(), microphone=(), camera=()',
  },
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}

if (userConfig) {
  const config = userConfig.default || userConfig
  for (const key in config) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...config[key],
      }
    } else {
      nextConfig[key] = config[key]
    }
  }
}

export default nextConfig
