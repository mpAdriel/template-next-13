/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Add here all the variables we want to use, and make sure it is in the ".env.development", ".env.local", ".env.production" files
  // Use the variables like this: process.env.NAME
  env: {
    BASE_URL_API: process.env.BASE_URL_API,
    NAME: process.env.NAME
  },
  output: 'standalone'
}

if (process.env.NODE_ENV === 'development') {
  // console.log('isDev')
} else if (process.env.NODE_ENV === 'production') {
  // console.log('isPro')
}

module.exports = nextConfig
