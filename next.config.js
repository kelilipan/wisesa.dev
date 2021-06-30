const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");
const pwaConfig = require("./wb.config");

const nextConfig = {
  // https://nextjs.org/docs/basic-features/image-optimization#domains
  images: {
    domains: ["pbs.twimg.com"],
  },
  // https://panelbear.com/docs/integration-nextjs/
  async rewrites() {
    return [
      {
        source: "/bear.js",
        destination: "https://cdn.panelbear.com/analytics.js",
      },
      // {
      //   source: "/_panelbear/:path*",
      //   destination: "https://api.panelbear.com/:path*",
      // },
    ];
  },
};

module.exports = withPlugins([withPWA, { pwa: pwaConfig }], nextConfig);
