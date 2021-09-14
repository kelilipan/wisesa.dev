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
    "!sitemap.xml",
  ],
};
