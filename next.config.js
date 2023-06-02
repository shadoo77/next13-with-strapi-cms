/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false, // Error: Invalid src prop (https://d1an7elaqzcblb.cloudfront.net
  experimental: {
    appDir: true
  }
};

module.exports = nextConfig;
