/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    mongodburl: process.env.MONGOOSE_URI,
    appUrl: process.env.APP_URL
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/employees',
        permanent: true,
      },
    ]
  },
}


