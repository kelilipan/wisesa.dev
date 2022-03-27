const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");
const pwaConfig = require("./wb.config");

const nextConfig = {
  // https://nextjs.org/docs/basic-features/image-optimization#domains
  images: {
    domains: ["i.scdn.co"],
  },
  // https://nextjs.org/docs/advanced-features/i18n-routing
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
        source: "/ayo-vaksin-gan",
        destination:
          "https://airtable.com/shrjy0wrNa2XdxuWP/tblYbbdsiJefdWFU3/viwtVMYtnCVdBjw4i?blocks=hide",
        permanent: false,
      },
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
