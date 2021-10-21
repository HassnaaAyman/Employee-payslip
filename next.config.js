/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    mongodburl: process.env.MONGOOSE_URL,
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


