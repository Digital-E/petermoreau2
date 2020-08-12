module.exports = {
  env: {
    PRISMIC_REPOSITORY_NAME: process.env.PRISMIC_REPOSITORY_NAME,
    PRISMIC_REPOSITORY_LOCALE: process.env.PRISMIC_REPOSITORY_LOCALE,
  },
  redirects() {
    return [
      {
        source: "/",
        destination: "/en",
        permanent: true,
      },
    ];
  },
};
