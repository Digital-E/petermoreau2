import React from "react";
import styled from "styled-components";

import Actualite from "./actualite";

const PrismicDOM = require("prismic-dom");

const Container = styled.div``;

const TitleWrapper = styled.div`
  display: flex;
`;

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
`;

export default ({ data }) => {

const showMore = () => {

}
  return (
    <Container>
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
          + <span>{data.moreText}</span>
        </ShowMore>
      </ShowMoreWrapper>
    </Container>
  );
};
