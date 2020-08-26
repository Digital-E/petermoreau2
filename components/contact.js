import React from "react";
import styled from "styled-components";

const PrismicDOM = require("prismic-dom");

const Container = styled.div`
  border-top: 2px solid black;
`;

const TitleWrapper = styled.div`
  display: flex;
  border-bottom: 2px solid black;
`;

const TextWrapper = styled.div`
  display: flex;
`;

const Text = styled.div`
  font-family: "Century Expanded Regular";
  font-size: 1.25rem;
  font-weight: 300;
  padding: 1rem 1.5rem;

  p:nth-child(n + 2) {
    text-indent: 50px;
  }

  @media (max-width: 992px) {
    padding-top: 1.5rem;
  }
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

const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Century Expanded Regular";
  font-size: 1.125rem;
  font-weight: 300;
  padding: 1.5rem 0;
  align-items: center;
  border-bottom: 5px solid black;

  a {
    color: black;
    text-decoration: none;
  }

  p {
    margin: 0;
  }

  div:nth-child(n + 1) {
    margin: 0 1rem;
  }

  @media (min-width: 992px) {
    flex-direction: row;
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
      <Row>
        <div>
          <a href={`mailto:${data.email}`}>{data.email}</a>
        </div>
        ·
        <div>
          <a href={`tel:${data.number}`}>{data.number}</a>
        </div>
        ·
        <div
          dangerouslySetInnerHTML={{
            __html: data.address && PrismicDOM.RichText.asHtml(data.address),
          }}
        />
      </Row>
      <TitleWrapper>
        <Title
          dangerouslySetInnerHTML={{
            __html: data.titleTwo && PrismicDOM.RichText.asHtml(data.titleTwo),
          }}
        />
      </TitleWrapper>
      <TextWrapper>
        <Text
          dangerouslySetInnerHTML={{
            __html: data.text && PrismicDOM.RichText.asHtml(data.text),
          }}
        />
      </TextWrapper>
    </Container>
  );
};
