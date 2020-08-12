import Head from "next/head";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import { CMS_NAME } from "../lib/constants";

export default function Home({ preview, allPosts }) {
  const posts = allPosts;

  return (
    <div className="container">
      <Layout preview={preview}>
        <Head>
          <title>PETER MOREAU</title>
          <link rel="icon" href="/images/favicon_io/favicon.ico" />
        </Head>

        <main>{`${process.env.PRISMIC_REPOSITORY_NAME}`}</main>

        <footer></footer>
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

export async function getStaticProps({ preview = false, previewData }) {
  const allPosts = await getAllPostsForHome(previewData);
  return {
    props: { preview, allPosts },
  };
}
