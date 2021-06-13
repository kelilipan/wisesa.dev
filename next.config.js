module.exports = {
  future: {
    webpack5: true,
  },
  // https://nextjs.org/docs/basic-features/image-optimization#domains
  images: {
    domains: ["pbs.twimg.com"],
  },
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
};
