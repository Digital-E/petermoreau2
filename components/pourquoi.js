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

const TextWrapper = styled.div`
  display: flex;
  border-bottom: 5px solid black;
`;

const Text = styled.div`
  font-family: "Century Expanded Regular";
  font-size: 3rem;
  font-weight: 300;
  padding: 1.5rem;

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
      <TextWrapper>
        <Text 
                  dangerouslySetInnerHTML={{
            __html: data.title && PrismicDOM.RichText.asHtml(data.text),
          }}
        />
      </TextWrapper>
    </Container>
  );
};
