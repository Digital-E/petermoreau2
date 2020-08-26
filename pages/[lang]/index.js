import React, { useEffect } from "react";
import Layout from "../../components/layout";

import { configureLanguage } from "../../utils/language";

import {
  getAllPostsForHome,
  getHeaderData,
  getActualitesData,
  getPourquoiData,
  getCommentData,
  getQuoiData,
  getQuiData,
  getContactData,
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
  headerRawData,
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
    navigationElements: headerRawData ? headerRawData[0].node.navigation : null,
    subTitleOne: headerRawData ? headerRawData[0].node.text_one : null,
    subTitleTwo: headerRawData ? headerRawData[0].node.text_two : null,
  };

  let actualitesData = {
    title: actualitesRawData ? actualitesRawData[0].node.title : null,
    image: actualitesRawData ? actualitesRawData[0].node.image : null,
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
    titleTwo: contactRawData ? contactRawData[0].node.title_two : null,
    text: contactRawData ? contactRawData[0].node.text : null,
  };

  return (
    <div className="container">
      <Layout
        preview={preview}
        title="PETER MOREAU"
        content={headerData.subTitleOne}
      >
        <div section-id="1" className="section section-1">
          <Header data={headerData} />
        </div>
        <div section-id="2" className="section section-2">
          <Actualites data={actualitesData} />
        </div>
        <div section-id="3" className="section section-3">
          <Pourquoi data={pourquoiData} />
        </div>
        <div section-id="4" className="section section-4">
          <Comment data={commentData} />
        </div>
        <div section-id="5" className="section section-5">
          <Quoi data={quoiData} />
        </div>
        <div section-id="6" className="section section-6">
          <Qui data={quiData} />
        </div>
        <div section-id="7" className="section section-7">
          <Contact data={contactData} />
        </div>
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
  const headerRawData = await getHeaderData(lang, previewData);
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
      headerRawData,
      actualitesRawData,
      pourquoiRawData,
      commentRawData,
      quoiRawData,
      quiRawData,
      contactRawData,
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
