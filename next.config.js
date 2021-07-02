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
  async redirects() {
    return [
      {
        source: "/resume",
        destination:
          "https://drive.google.com/file/d/1LEKZAy6uLi71iP24A4u5GYTiPGU0bSPW/view?usp=sharing",
        permanent: false,
      },
    ];
  },
};

module.exports = withPlugins([[withPWA, { pwa: pwaConfig }]], nextConfig);
