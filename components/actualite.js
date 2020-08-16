import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

import moment from "moment";

const PrismicDOM = require("prismic-dom");

const Container = styled.div`
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: row;

  border-top: 2px solid black;

  > div {
    flex-basis: 50%;
  }
`;

const ColLeft = styled.div``;

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
  }

  p:nth-child(n+2) {
    text-indent: 50px;
  }
`;

const ShowMore = styled.div`
  cursor: pointer;
  width: fit-content;

  > span {
    font-family: "Druk Medium";
    font-size: 1.3rem;
    font-weight: 300;
  }
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

    if(shownText.length < 350) {
      shownText = PrismicDOM.RichText.asHtml(data.text).split("")
      return setHasClicked(true);
    } 
    shownText.push("...");
  });

  useEffect(() => {
    setText(shownText.join(""));
  }, []);

  useEffect(() => {
    setText(shownText.join(""));
    setHasClicked(false);
}, [props]);




  const showMore = () => {
    setHasClicked(true)
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
        {
          !hasClicked &&
        <ShowMore onClick={() => showMore()}>
          + <span>{props.readMoreText}</span>
        </ShowMore>
        }
      </ColRight>
    </Container>
  );
};
