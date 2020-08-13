const withFonts = require("next-fonts");

module.exports = withFonts({
  env: {
    PRISMIC_REPOSITORY_NAME: process.env.PRISMIC_REPOSITORY_NAME,
    PRISMIC_REPOSITORY_LOCALE: process.env.PRISMIC_REPOSITORY_LOCALE,
  },
  webpack(config, options) {
    return config;
  },
  //   redirects() {
  //     return [
  //       {
  //         source: "/",
  //         destination: "/en",
  //         permanent: true,
  //       },
  //     ];
  //   },
});
