import React from "react";
import styled from "styled-components";

import Actualite from "./actualite";
import Image from "./image"

const PrismicDOM = require("prismic-dom");

const Container = styled.div``;

const TitleWrapper = styled.div`
  display: flex;
`;

const ImageWrapper = styled.div`
  border-bottom: 2px solid black;
`


const Title = styled.div`
  h1,h2,h3,h4,h5 {
  font-family: "Druk Medium";
  font-size: 7rem;
  font-weight: 300;
  margin: 0;
  }

  margin: 0 auto;
  padding: 0;

  @media(min-width: 992px) {
    h1,h2,h3,h4,h5 {
    font-size: 15rem;
    }    
  }
`;

const Actualites = styled.div``;

const ShowMoreWrapper = styled.div`
  display: flex;
  border-top: 5px solid black;
  border-bottom: 5px solid black;
`;

const ShowMore = styled.div`
  font-family: "Druk Medium";
  font-size: 2rem;
  font-weight: 300;
  margin: 0 auto;
  padding: 2rem 0;
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
`

export default ({ data }) => {

const showMore = () => {

}
  return (
    <Container>
      {
        data.image !== null ?
        <ImageWrapper>
          <Image src={data.image}/>
        </ImageWrapper>  
        :
        null
      }  
      <TitleWrapper>
        <Title dangerouslySetInnerHTML={{__html: data.title && PrismicDOM.RichText.asHtml(data.title) }}/>
      </TitleWrapper>
      <Actualites>
        {data.posts === undefined
          ? null
          : data.posts.map((post) => (
              <Actualite data={post} readMoreText={data.readMoreText} />
            ))}
      </Actualites>
      <ShowMoreWrapper>
        <ShowMore onClick={() => showMore()}>
          <Plus><svg viewBox="0 0 39.42 39.42"><path d="M19.71,39.42A19.71,19.71,0,1,1,39.42,19.71,19.73,19.73,0,0,1,19.71,39.42ZM19.71,2A17.71,17.71,0,1,0,37.42,19.71,17.73,17.73,0,0,0,19.71,2Z"/><polygon points="29.29 17.79 20.71 17.79 20.71 10.13 18.71 10.13 18.71 17.79 10.13 17.79 10.13 19.79 18.71 19.79 18.71 29.29 20.71 29.29 20.71 19.79 29.29 19.79 29.29 17.79"/></svg></Plus><span>{data.moreText}</span>
        </ShowMore>
      </ShowMoreWrapper>
    </Container>
  );
};
