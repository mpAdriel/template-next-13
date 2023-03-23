/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL_API: process.env.BASE_URL_API
  },
  output: 'standalone'
}

if (process.env.NODE_ENV === 'development') {
  console.log('isDev')
} else if (process.env.NODE_ENV === 'production') {
  console.log('isPro')
} else console.log('process.env.NODE_ENV', process.env.NODE_ENV)

module.exports = nextConfig
