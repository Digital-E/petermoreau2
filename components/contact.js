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

const Title = styled.div`
  h1,h2,h3,h4,h5 {
    font-family: "Druk Medium";
    font-size: 15rem;
    font-weight: 300;
    margin: 0;
  }
  margin: 0 auto;
  padding: 0;
`;

const Row = styled.div`
display: flex;
justify-content: center;
font-family: "Century Expanded Regular";
font-size: 1.125rem;
font-weight: 300;
padding: 1.5rem 0;

a {
  color: black;
  text-decoration: none;
}

p {
  margin: 0;
}

div:nth-child(n+1) {
  margin: 0 1rem;
}
`











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
        <div><a href={`mailto:${data.email}`}>{data.email}</a></div>
        ·
        <div><a href={`tel:${data.number}`}>{data.number}</a></div>
        ·
        <div 
        dangerouslySetInnerHTML={{
        __html: data.address && PrismicDOM.RichText.asHtml(data.address),
          }}
        />
      </Row>
    </Container>
  );
};
