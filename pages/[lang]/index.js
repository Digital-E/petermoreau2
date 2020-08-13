import Layout from "../../components/layout";
import { getAllPostsForHome } from "../../lib/api";

import Header from "../../components/header";

import { convertLanguage } from "../../utils/language";

import { useRouter } from "next/router";

export default function Index({ preview, allPosts }) {
  const router = useRouter();
  const posts = allPosts;

  // console.log(posts);

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

  return (
    <div className="container">
      <Layout preview={preview} title="PETER MOREAU">
        {/* <main>{`${process.env.PRISMIC_REPOSITORY_NAME}`}</main>
        <LanguageSelector />
        Page is in: {`${router.query.lang}`}
        {post.node.title}
        <footer></footer> */}
        <Header data={headerData} />
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
  return {
    props: { preview, allPosts },
  };
}

export async function getStaticPaths() {
  const allLanguages = ["en", "es", "fr"];

  return {
    paths: allLanguages?.map((lang) => `/${lang}`) || [],
    fallback: true,
  };
}
