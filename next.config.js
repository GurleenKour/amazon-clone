/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    // this taks images from the domains mentioned below
    domains: ['links.papareact.com','fakestoreapi.com']
  }
}

module.exports = nextConfig
