import React from "react";
import styled from "styled-components";

const PrismicDOM = require("prismic-dom");

const Container = styled.div``;

const TitleWrapper = styled.div`
  display: flex;
  border-bottom: 2px solid black;
`;

const Title = styled.div`
h1,h2,h3,h4,h5 {
  font-family: "Druk Medium";
  font-size: 15rem;
  font-weight: 300;
  margin: 0;
  padding: 0;
}

  margin: 0 auto;
  padding: 0;
`;

const TextWrapper = styled.div`
  display: flex;
  border-bottom: 2px solid black;
  padding: 1rem 1.5rem;

  p {
    margin: 0;
  }

  > div {
    flex-basis: 50%;
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

  p:nth-child(n+2) {
    text-indent: 50px;
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
