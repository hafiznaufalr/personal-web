/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    output: 'export',
    images: {
      unoptimized: true
    },
    trailingSlash: false // optional, make false (Condition 1) or true (Condition 2)
  };
