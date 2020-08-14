import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const TitleWrapper = styled.div`
  display: flex;
  border-bottom: 2px solid black;
`;

const Title = styled.h1`
  font-family: "Druk Medium";
  font-size: 15rem;
  font-weight: 300;
  margin: 0 auto;
  padding: 0;
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
`;

export default ({ data }) => {
  return (
    <Container>
      <TitleWrapper>
        <Title>{data.title}</Title>
      </TitleWrapper>
      <TextWrapper>
        <Text>{data.text}</Text>
      </TextWrapper>
    </Container>
  );
};
