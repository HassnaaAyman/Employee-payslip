/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    mongodburl: "mongodb+srv://Employee:FmPPddjhcFc6SnW9@cluster0.qtwyk.mongodb.net/Employee?retryWrites=true&w=majority",
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


