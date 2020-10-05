import React from "react";
import styled from "styled-components";

const PrismicDOM = require("prismic-dom");

const Container = styled.div``;

const TitleWrapper = styled.div`
  display: flex;
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
    padding: 0;
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

const TextWrapper = styled.div`
  display: flex;
  border-bottom: 5px solid black;
  padding: 1rem 1.5rem;
  flex-direction: column;

  p {
    margin: 0;
    margin-top: 15px;
  }

  > div {
    flex-basis: 50%;
  }

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

const TextOne = styled.div`
  font-family: "Century Expanded Regular";
  font-size: 2rem;
  font-weight: 300;
  padding-right: 1.5rem;
`;

const TextTwo = styled.div`
  font-family: "Century Expanded Regular";
  font-size: 1.25rem;
  font-weight: 300;

  p:nth-child(n + 2) {
    // text-indent: 50px;
  }

  @media (max-width: 992px) {
    padding-top: 1.5rem;
  }
`;

export default ({ data }) => {
  return (
    <Container>
      <TitleWrapper>
        <Title
          dangerouslySetInnerHTML={{
            __html: data.title && PrismicDOM.RichText.asHtml(data.title),
          }}
        />
      </TitleWrapper>
      <TextWrapper>
        <TextOne
          dangerouslySetInnerHTML={{
            __html: data.title && PrismicDOM.RichText.asHtml(data.textOne),
          }}
        />
        <TextTwo
          dangerouslySetInnerHTML={{
            __html: data.title && PrismicDOM.RichText.asHtml(data.textTwo),
          }}
        />
      </TextWrapper>
    </Container>
  );
};
