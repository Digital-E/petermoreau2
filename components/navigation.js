import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-family: Druk Medium;
  font-size: 1.25rem;
`;

const LeftCol = styled.div`
  display: flex;
  align-items: center;

  > div {
    padding: 0 1.5rem;
    letter-spacing: 0.5rem;
  }
`;

const RightCol = styled.div`
  display: flex;
`;

const Element = styled.div`
  border-left: 1px solid black;
  padding: 0 1.5rem;
  cursor: pointer;

  display: flex;
  align-items: center;

  :hover {
    background-color: black;
    color: white;
  }
`;

export default ({ data }) => {
  return (
    <Container>
      <LeftCol>
        <div>PM</div>
      </LeftCol>
      <RightCol>
        {data.map((el, index) => (
          <Element key={index}>{el}</Element>
        ))}
      </RightCol>
    </Container>
  );
};
