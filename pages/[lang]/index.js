import Layout from "../../components/layout";
import { getAllPostsForHome, getActualitesData } from "../../lib/api";

import Header from "../../components/header";
import Actualites from "../../components/actualites";

import { convertLanguage } from "../../utils/language";

import { useRouter } from "next/router";

export default function Index({ preview, allPosts, actualitesRawData }) {
  const router = useRouter();
  const posts = allPosts;

  let headerData = {
    navigationElements: [
      "Actualités",
      "Pourquoi",
      "Comment",
      "Quoi",
      "Qui",
      "Contact",
    ],
    subTitleOne:
      "Etude d’avocat·e·s | Law Firm | Despacho de abogadas y abogados",
    subTitleTwo: "Inscrit·e·s aux Barreaux de Genève, Paris et Californie",
  };

  let actualitesData = {
    title: actualitesRawData ? actualitesRawData[0].node.title[0].text : null,
    readMoreText: actualitesRawData
      ? actualitesRawData[0].node.read_more_text
      : null,
    moreText: actualitesRawData ? actualitesRawData[0].node.more_text : null,
    posts: allPosts,
  };

  return (
    <div className="container">
      <Layout preview={preview} title="PETER MOREAU">
        {/* <main>{`${process.env.PRISMIC_REPOSITORY_NAME}`}</main>
        <LanguageSelector />
        Page is in: {`${router.query.lang}`}
        {post.node.title}
        <footer></footer> */}
        <Header data={headerData} />
        <Actualites data={actualitesData} />
      </Layout>
      <style jsx>{``}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

export async function getStaticProps({ params, preview = false, previewData }) {
  let lang = convertLanguage(params.lang);

  const allPosts = await getAllPostsForHome(lang, previewData);
  const actualitesRawData = await getActualitesData(lang, previewData);

  return {
    props: { preview, allPosts, actualitesRawData },
  };
}

export async function getStaticPaths() {
  const allLanguages = ["en", "es", "fr"];

  return {
    paths: allLanguages?.map((lang) => `/${lang}`) || [],
    fallback: true,
  };
}
