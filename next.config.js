const withPWA = require("next-pwa");
module.exports = withPWA({
  future: {
    webpack5: true,
  },

  // https://nextjs.org/docs/basic-features/image-optimization#domains
  images: {
    domains: ["pbs.twimg.com"],
  },
  // https://splitbee.io/docs/nextjs-proxy
  async rewrites() {
    return [
      {
        source: "/bee.js",
        destination: "https://cdn.splitbee.io/sb.js",
      },
      {
        source: "/_hive/:slug",
        destination: "https://hive.splitbee.io/:slug",
      },
    ];
  },
  pwa: {
    disable: process.env.NODE_ENV === "development",
    sourcemap: false,
    dest: "public",
    register: true,
  },
});
