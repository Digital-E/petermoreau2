import Layout from "../../components/layout";
import { getAllPostsForHome } from "../../lib/api";

import { useRouter } from "next/router";

export default function Index({ preview, allPosts }) {
  const router = useRouter();
  const posts = allPosts;

  return (
    <div className="container">
      <Layout preview={preview}>
        <main>{`${process.env.PRISMIC_REPOSITORY_NAME}`}</main>
        Page is in: {`${router.query.lang}`}
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

// export async function getStaticProps({ preview = false, previewData }) {
//   const allPosts = await getAllPostsForHome(previewData);
//   return {
//     props: { preview, allPosts },
//   };
// }
