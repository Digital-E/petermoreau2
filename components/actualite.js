import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

import moment from "moment";

const PrismicDOM = require("prismic-dom");

const Container = styled.div`
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;

  border-top: 2px solid black;

  > div {
    flex-basis: 50%;
  }

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

const ColLeft = styled.div`
  padding-right: 1rem;
`;

const ColRight = styled.div``;

const Date = styled.div`
  font-family: "Druk Medium";
  font-size: 2rem;
`;

const Title = styled.div`
  font-family: "Century Expanded Regular";
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: 300;
`;

const Text = styled.div`
  font-family: "Century Expanded Regular";
  font-size: 1.25rem;

  p {
    margin: 0;
    margin-top: 15px;
  }

  p:nth-child(n + 2) {
    // text-indent: 50px;
  }
`;

const ShowMore = styled.div`
  cursor: pointer;
  width: fit-content;
  display: flex;
  align-items: center;
  margin-top: 0.5rem;

  > span {
    font-family: "Druk Medium";
    font-size: 1.3rem;
    font-weight: 300;
    padding-left: 0.3rem;
  }
`;

const Plus = styled.div`
  display: inline-block;
  height: 20px;
  width: 20px;
`;

export default (props) => {
  let data = props.data.node;
  let [text, setText] = useState("");
  let shownText = [];
  let [hasClicked, setHasClicked] = useState(false);
  let hiddenText;

  useEffect(() => {
    hiddenText = PrismicDOM.RichText.asHtml(data.text);
    shownText = PrismicDOM.RichText.asHtml(data.text).split("").splice(0, 350);

    if (shownText.length < 350) {
      shownText = PrismicDOM.RichText.asHtml(data.text).split("");
      return setHasClicked(true);
    }
    shownText.push("...");
  });

  useEffect(() => {
    setText(shownText.join(""));
  }, [data]);

  useEffect(() => {
    setText(shownText.join(""));
    setHasClicked(false);
  }, [data]);

  const showMore = () => {
    setHasClicked(true);
    setText(hiddenText);
  };

  return (
    <Container>
      <ColLeft>
        <Date>{moment(data.date).format("D.MM.YYYY")}</Date>
        <Title>{data.title}</Title>
      </ColLeft>
      <ColRight>
        <Text
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        />
        {!hasClicked && (
          <ShowMore onClick={() => showMore()}>
            <Plus>
              <svg viewBox="0 0 39.42 39.42">
                <path d="M19.71,39.42A19.71,19.71,0,1,1,39.42,19.71,19.73,19.73,0,0,1,19.71,39.42ZM19.71,2A17.71,17.71,0,1,0,37.42,19.71,17.73,17.73,0,0,0,19.71,2Z" />
                <polygon points="29.29 17.79 20.71 17.79 20.71 10.13 18.71 10.13 18.71 17.79 10.13 17.79 10.13 19.79 18.71 19.79 18.71 29.29 20.71 29.29 20.71 19.79 29.29 19.79 29.29 17.79" />
              </svg>
            </Plus>{" "}
            <span>{props.readMoreText}</span>
          </ShowMore>
        )}
      </ColRight>
    </Container>
  );
};
