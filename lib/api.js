import Prismic from "prismic-javascript";

const fetch = require("node-fetch");

const REPOSITORY = process.env.PRISMIC_REPOSITORY_NAME;

const REF_API_URL = `https://${REPOSITORY}.prismic.io/api/v2`;
const GRAPHQL_API_URL = `https://${REPOSITORY}.prismic.io/graphql`;

// export const API_URL = 'https://your-repo-name.cdn.prismic.io/api/v2'

const API_TOKEN = process.env.PRISMIC_API_TOKEN;
const API_LOCALE = process.env.PRISMIC_REPOSITORY_LOCALE;

export const PrismicClient = Prismic.client(REF_API_URL, {
  //   accessToken: API_TOKEN,
});

async function fetchAPI(query, { previewData, variables } = {}) {
  const prismicAPI = await PrismicClient.getApi();
  const res = await fetch(
    `${GRAPHQL_API_URL}?query=${query}&variables=${JSON.stringify(variables)}`,
    {
      headers: {
        "Prismic-Ref": previewData?.ref || prismicAPI.masterRef.ref,
        "Content-Type": "application/json",
        // "Accept-Language": API_LOCALE,
        //   Authorization: `Token ${API_TOKEN}`,
      },
    }
  );

  if (res.status !== 200) {
    console.log(await res.text());
    throw new Error("Failed to fetch API");
  }

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
        {
          allActualites {
            edges {
              node {
                _meta {
                  uid
                  lang
                }
              }
            }
          }
        }
      `);
  return data?.allActualites?.edges;
}

export async function getAllPostsForHome(lang, previewData) {
  const data = await fetchAPI(
    `
        query AllActualites($lang: String!) {
          allActualites(sortBy: date_DESC, lang: $lang) {
            edges {
              node {
                date
                title
                text
                _meta {
                  uid
                  lang
                }
              }
            }
          }
        }
      `,
    {
      previewData,
      variables: {
        lang,
      },
    }
  );

  return data.allActualites.edges;
}

export async function getActualitesData(lang, previewData) {
  const data = await fetchAPI(
    `
          query AllActualitess($lang: String!) {
            allActualitess(lang: $lang) {
              edges {
                node {
                    title
                    read_more_text
                    more_text
                }
              }
            }
          }
        `,
    {
      previewData,
      variables: {
        lang,
      },
    }
  );

  return data.allActualitess.edges;
}

export async function getPostAndMorePosts(slug, lang, previewData) {
  const data = await fetchAPI(
    `
    query ActualiteBySlug($slug: String!, $lang: String!) {
      actualite(uid: $slug, lang: $lang) {
        date
        title
        text
        _meta {
          uid
          lang
        }
      }
      moreActualites: allActualites(sortBy: date_DESC, first: 3) {
        edges {
          node {
            date
            title
            text
            _meta {
              uid
              lang
            }
          }
        }
      }
    }
    `,
    {
      previewData,
      variables: {
        slug,
        // lang: API_LOCALE,
        lang,
      },
    }
  );

  //   data.moreActualites = data.moreActualites.edges
  //     .filter(({ node }) => node._meta.uid !== slug)
  //     .slice(0, 2);

  return data;
}
