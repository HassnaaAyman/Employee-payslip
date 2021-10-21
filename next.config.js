/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    mongodburl: process.env.MONGOOSE_URI,
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


