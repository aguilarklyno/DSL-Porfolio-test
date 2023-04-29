/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  ...nextConfig,
  images: {
    domains: ["localhost", "images.microcms-assets.io"],
    loader: "imgix",
    path: "https://images.microcms-assets.io/assets/",
  },
}

