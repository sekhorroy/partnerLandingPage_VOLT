/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ["https://volt-images.s3.ap-south-1.amazonaws.com/partner_images/testimonial"],
  },
}
module.exports = nextConfig
