import Layout from "../../components/layout";
import {
  getAllPostsForHome,
  getActualitesData,
  getPourquoiData,
  getCommentData,
  getQuoiData,
  getQuiData,
  getContactData
} from "../../lib/api";

import Header from "../../components/header";
import Actualites from "../../components/actualites";
import Pourquoi from "../../components/pourquoi";
import Comment from "../../components/comment";
import Quoi from "../../components/quoi";
import Qui from "../../components/qui";
import Contact from "../../components/contact";

import { convertLanguage } from "../../utils/language";

import { useRouter } from "next/router";

export default function Index({
  preview,
  allPosts,
  actualitesRawData,
  pourquoiRawData,
  commentRawData,
  quoiRawData,
  quiRawData,
  contactRawData,
}) {
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
    title: actualitesRawData ? actualitesRawData[0].node.title : null,
    readMoreText: actualitesRawData
      ? actualitesRawData[0].node.read_more_text
      : null,
    moreText: actualitesRawData ? actualitesRawData[0].node.more_text : null,
    posts: allPosts,
  };

  let pourquoiData = {
    title: pourquoiRawData ? pourquoiRawData[0].node.title : null,
    text: pourquoiRawData ? pourquoiRawData[0].node.text : null,
  };

  let commentData = {
    title: commentRawData ? commentRawData[0].node.title : null,
    textOne: commentRawData ? commentRawData[0].node.text_one : null,
    textTwo: commentRawData ? commentRawData[0].node.text_two : null,
  };

  let quoiData = {
    title: quoiRawData ? quoiRawData[0].node.title : null,
    subtitle: quoiRawData ? quoiRawData[0].node.subtitle : null,
    columns: quoiRawData ? quoiRawData[0].node.columns : null,
  };

  let quiData = {
    title: quiRawData ? quiRawData[0].node.title : null,
    people: quiRawData ? quiRawData[0].node.people : null,
  };

  let contactData = {
    title: contactRawData ? contactRawData[0].node.title : null,
    email: contactRawData ? contactRawData[0].node.email : null,
    number: contactRawData ? contactRawData[0].node.number : null,
    address: contactRawData ? contactRawData[0].node.address : null,
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
        <Pourquoi data={pourquoiData} />
        <Comment data={commentData} />
        <Quoi data={quoiData}/>
        <Qui data={quiData}/>
        <Contact data={contactData}/>
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
  const pourquoiRawData = await getPourquoiData(lang, previewData);
  const commentRawData = await getCommentData(lang, previewData);
  const quoiRawData = await getQuoiData(lang, previewData);
  const quiRawData = await getQuiData(lang, previewData);
  const contactRawData = await getContactData(lang, previewData);

  return {
    props: {
      preview,
      allPosts,
      actualitesRawData,
      pourquoiRawData,
      commentRawData,
      quoiRawData,
      quiRawData,
      contactRawData
    },
  };
}

export async function getStaticPaths() {
  const allLanguages = ["en", "es", "fr"];

  return {
    paths: allLanguages?.map((lang) => `/${lang}`) || [],
    fallback: true,
  };
}
