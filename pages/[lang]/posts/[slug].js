import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Layout from "../../../components/layout";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../../lib/api";
import { getLanguage } from "../../../utils/language";

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?._meta?.uid) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview} title={post?.title}>
      {router.isFallback ? (
        <div>Loading…</div>
      ) : (
        <>
          <article>{post?.text[0].text}</article>
          {/* {morePosts && morePosts.length > 0 && (
              <MoreStories posts={morePosts} />
            )} */}
        </>
      )}
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false, previewData }) {
  let getLang = (lang) => {
    switch (lang) {
      case "en":
        return "en-gb";
        break;
      case "es":
        return "es-es";
        break;
      case "fr":
        return "fr-fr";
        break;
      default:
        return "en-gb";
    }
  };

  let lang = getLang(params.lang);

  const data = await getPostAndMorePosts(params.slug, lang, previewData);

  return {
    props: {
      preview,
      post: data?.actualite ?? null,
      morePosts: data?.moreActualites ?? [],
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths:
      allPosts?.map(
        ({ node }) => `/${getLanguage(node._meta.lang)}/posts/${node._meta.uid}`
      ) || [],
    fallback: true,
  };
}
