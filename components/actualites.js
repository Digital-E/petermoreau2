import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Actualite from "./actualite";
import Image from "./image";

const PrismicDOM = require("prismic-dom");

const Container = styled.div``;

const TitleWrapper = styled.div`
  display: flex;
`;

const ImageWrapper = styled.div`
  border-bottom: 2px solid black;
`;

const Title = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: "Druk Medium";
    font-size: 7rem;
    font-weight: 300;
    margin: 0;
  }

  margin: 0 auto;
  padding: 0;

  @media (min-width: 992px) {
    h1,
    h2,
    h3,
    h4,
    h5 {
      font-size: 15rem;
    }
  }
`;

const Actualites = styled.div``;

const ShowMoreWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-top: 5px solid black;
  border-bottom: 5px solid black;

  > div {
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
`;

const SeeMoreText = styled.div`
font-family: "Druk Medium";
font-size: 2rem;
font-weight: 300;
// margin: 0 auto;
padding: 2rem 0 0.5rem 0;
display: flex;
align-items: center;
// cursor: pointer;

span {
  padding-left: 0.5rem;
}
`


const ShowMore = styled.div`
  font-family: "Druk Medium";
  font-size: 2rem;
  font-weight: 300;
  // margin: 0 auto;
  padding: 0 0 2rem 0;
  display: flex;
  align-items: center;
  cursor: pointer;

  span {
    padding-left: 0.5rem;
  }
`;

const Plus = styled.div`
  display: inline-block;
  height: 40px;
  width: 40px;
`;

let showAmount = 3;

let actualitesPrevHeight;
let actualitesCurrentHeight;

export default ({ data }) => {
  let [showPosts, setShowPosts] = useState([]);
  // let [showAmount, setShowAmount] = useState(1);
  let allPosts = data.posts;


  useEffect(() => {
    if (allPosts !== undefined) {
      let postsToShow = allPosts.slice().splice(0, showAmount);
      setShowPosts(postsToShow);
    }
  }, [data]);

  const showMore = () => {
    showAmount += 2;
    if(showAmount >= allPosts.length) showAmount = allPosts.length;
    // setShowAmount((showAmount += 1));
    let postsToShow = allPosts.slice().splice(0, showAmount);
    setShowPosts(postsToShow);
  };

  const showLess = () => {
    actualitesPrevHeight = document.querySelector(".all-actualites").offsetHeight;
    showAmount -= 2;
    if(showAmount <= 3) showAmount = 3;
    // setShowAmount((showAmount += 1));
    let postsToShow = allPosts.slice().splice(0, showAmount);
    setShowPosts(postsToShow);


    setTimeout(()=>{
      scrollTo();
    },150)
  };

  const scrollTo = () => {
    actualitesCurrentHeight = document.querySelector(".all-actualites").offsetHeight;

    let actualitesNewHeight = actualitesPrevHeight - actualitesCurrentHeight;

    window.gsap.to(window, {duration: 1, scrollTo: window.scrollY - actualitesNewHeight})
  }

  return (
    <Container>
      {data.image !== null ? (
        <ImageWrapper>
          <Image src={data.image} />
        </ImageWrapper>
      ) : null}
      {/* <TitleWrapper>
        <Title
          dangerouslySetInnerHTML={{
            __html: data.title && PrismicDOM.RichText.asHtml(data.title),
          }}
        />
      </TitleWrapper>
      <Actualites className="all-actualites">
        {showPosts === undefined
          ? null
          : showPosts.map((post) => (
              <Actualite data={post} readMoreText={data.readMoreText} readLessText={data.readLessText} />
            ))}
      </Actualites>
      <ShowMoreWrapper className="show-more-wrapper">
      <SeeMoreText>{allPosts ? (showAmount !== allPosts.length ? data.moreText : data.lessText) : null}</SeeMoreText>
      <div>
        {showAmount > 3 ?
        <ShowMore onClick={() => showLess()}>
          <Plus>
            <svg x="0px" y="0px" viewBox="0 0 39.4 39.4" xmlSpace="preserve">
            <path d="M19.7,39.4C8.8,39.4,0,30.6,0,19.7S8.8,0,19.7,0s19.7,8.8,19.7,19.7l0,0C39.4,30.6,30.6,39.4,19.7,39.4z M19.7,2
              C9.9,2,2,9.9,2,19.7s7.9,17.7,17.7,17.7s17.7-7.9,17.7-17.7l0,0C37.4,9.9,29.5,2,19.7,2z"/>
            <path d="M18.7,17.8"/>
            <polyline points="17.9,17.8 10.1,17.8 10.1,19.8 18.7,19.8 18.7,19.8 20.7,19.8 20.7,19.8 29.3,19.8 29.3,17.8 18.7,17.8 "/>
            </svg>
          </Plus>
          <span> </span>
        </ShowMore>
        :
        null}
        {allPosts ? (showAmount !== allPosts.length ?
        <ShowMore onClick={() => showMore()}>
          <Plus>
            <svg viewBox="0 0 39.42 39.42">
              <path d="M19.71,39.42A19.71,19.71,0,1,1,39.42,19.71,19.73,19.73,0,0,1,19.71,39.42ZM19.71,2A17.71,17.71,0,1,0,37.42,19.71,17.73,17.73,0,0,0,19.71,2Z" />
              <polygon points="29.29 17.79 20.71 17.79 20.71 10.13 18.71 10.13 18.71 17.79 10.13 17.79 10.13 19.79 18.71 19.79 18.71 29.29 20.71 29.29 20.71 19.79 29.29 19.79 29.29 17.79" />
            </svg>
          </Plus>
        </ShowMore>
                :
                null) : null}
        </div>
      </ShowMoreWrapper> */}
    </Container>
  );
};
