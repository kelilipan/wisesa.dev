module.exports = {
  disable: process.env.NODE_ENV === "development",
  sourcemap: false,
  dest: "public",
  register: true,
  // https://github.com/shadowwalker/next-pwa/issues/147
  publicExcludes: [
    "!blog/**/*",
    "!projects/**/*",
    "!logos/**/*",
    "!favicon/**/*",
    "!preview.png",
    "!me.svg",
    "!me-2.svg",
    "!sitemap.xml",
  ],
  buildExcludes: [/static\/image\/.*$/],
  runtimeCaching: [
    {
      urlPattern: /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "static-image-assets",
        expiration: {
          maxEntries: 64,
          maxAgeSeconds: 24 * 60 * 60, // 24 hours
        },
      },
    },
    {
      urlPattern: /\.(?:woff|woff2|ttf|otf)$/i,
      handler: "CacheFirst",
      options: {
        cacheName: "custom-fonts",
        expiration: {
          maxEntries: 4,
          maxAgeSeconds: 365 * 24 * 60 * 60, // 365 days
        },
      },
    }
  ],
};
