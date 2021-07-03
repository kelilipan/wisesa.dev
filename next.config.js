const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");
const pwaConfig = require("./wb.config");

const nextConfig = {
  // https://nextjs.org/docs/basic-features/image-optimization#domains
  images: {
    domains: ["pbs.twimg.com"],
  },
  // https://nextjs.org/docs/advanced-features/i18n-routing
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ["en-US", "id"],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: "en-US",
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
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      });
    }

    return config;
  },
};

module.exports = withPlugins([[withPWA, { pwa: pwaConfig }]], nextConfig);
