/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["da"],
    defaultLocale: "da",
  },
  images: { domains: ["www.pandapoob.com"] },
};

module.exports = nextConfig;
