/** @type {import('next').NextConfig} */
const nextConfig = {

  reactStrictMode: true,
  images:{
    remotePatterns:[
      {
        protocol:'http',
        hostname:'....'
      }
    ],
    unoptimized:true
  },
}

module.exports = nextConfig
