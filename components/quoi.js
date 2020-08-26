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
  border-bottom: 2px solid black;
`;

const Text = styled.div`
  margin: 0 auto;

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
    font-family: "Century Expanded Regular";
    font-size: 2rem;
    font-weight: 300;
    padding: 1.5rem;
    text-align: center;
  }

  @media (min-width: 992px) {
    h1,
    h2,
    h3,
    h4,
    h5 {
      font-size: 3rem;
      padding: 1.5rem;
    }
  }
`;

const Columns = styled.div`
  display: flex;
  flex-wrap: wrap;

  > div {
    flex-basis: 100%;
  }

  border-bottom: 5px solid black;

  @media (min-width: 992px) {
    flex-wrap: nowrap;
    > div {
      flex-basis: 25%;
    }
  }
`;

const Column = styled.div`
padding: 1rem 1rem 2rem 1rem;

border-bottom: 2px solid black;

:last-child {
  border-bottom: 0px solid black;
}

@media(min-width: 992px) {
  border-bottom: none;
  border-right: 2px solid black;

  :last-child {
  border-right: 0px solid black;
}
`;

const ColumnTitle = styled.div`
  text-align: center;

  padding: 0 0 1rem 0;

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
    font-family: "Druk Medium";
    font-size: 2rem;
    font-weight: 300;
  }
`;

const ColumnText = styled.div`
  font-family: "Century Expanded Regular";
  font-size: 1.25rem;
  font-weight: 300;

  p {
    margin: 0;
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
      {/* <TextWrapper>
        <Text 
                  dangerouslySetInnerHTML={{
            __html: data.subtitle && PrismicDOM.RichText.asHtml(data.subtitle),
          }}
        />
      </TextWrapper> */}
      <Columns>
        {data.columns?.map((item) => (
          <Column>
            <ColumnTitle
              dangerouslySetInnerHTML={{
                __html:
                  item.column_title &&
                  PrismicDOM.RichText.asHtml(item.column_title),
              }}
            />
            <ColumnText
              dangerouslySetInnerHTML={{
                __html:
                  item.column_text &&
                  PrismicDOM.RichText.asHtml(item.column_text),
              }}
            />
          </Column>
        ))}
      </Columns>
    </Container>
  );
};
