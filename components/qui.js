import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

const PrismicDOM = require("prismic-dom");

const Container = styled.div`
  .dropdown-show {
    max-height: 999;
    overflow: hidden;
    transition-duration: 1s;
  }

  .dropdown-hide {
    max-height: 0;
    overflow: hidden;
    transition-duration: 1s;
  }
`;

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
    font-size: 15rem;
    font-weight: 300;
    margin: 0;
  }
  margin: 0 auto;
  padding: 0;
`;

const Dropdowns = styled.div``;

const Dropdown = styled.div``;

const DropdownHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.div`
  margin: 0;
  font-family: "Century Expanded Regular";
  font-size: 3rem;
  font-weight: 300;
  padding: 1.5rem;
  text-align: center;
  width: 100%;
`;

const Arrow = styled.div``;

const DropdownContent = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 2px solid black;

  > div {
    flex-basis: 50%;
  }
`;

const LeftCol = styled.div`
  border-right: 2px solid black;
  img {
    width: 100%;
    height: auto;
  }

  border-bottom: 2px solid black;
`;

const RightCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 2px solid black;
`;

const Role = styled.div`
  margin: 0;
  font-family: "Century Expanded Regular";
  font-size: 1.7rem;
  font-weight: 300;
  padding: 0.75rem;
  text-align: center;

  border-bottom: 2px solid black;
`;

const Text = styled.div`
  font-family: "Century Expanded Regular";
  font-size: 1.25rem;
  font-weight: 300;
  padding: 1rem 1rem 1rem 1rem;

  p {
    margin: 0;
  }

  p:nth-child(n + 2) {
    text-indent: 50px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 2px solid black;
  padding: 0.75rem 1.25rem;
  font-family: "Century Expanded Regular";
  font-size: 1.125rem;
  font-weight: 300;

  a {
    color: black;
    text-decoration: none;
  }
`;

const InfoLeftCol = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
`;

const InfoRightCol = styled.div`
  flex-basis: 50%;

  p {
    margin: 0;
  }
`;

const RightColTop = styled.div``;

export default ({ data }) => {
  let dropdownRef = useRef([]);
  let [isClicked, setIsClicked] = useState([]);

  useEffect(() => {
    if(data.people === null) return
    let initArray = [];
    for(let i = 0; i < data.people.length; i++) {
      initArray.push(false)
    }

    setIsClicked([...initArray]);

  }, [data]);


  const toggleClick = (index) => {
    let newIsClicked = isClicked
    newIsClicked[index] = !isClicked[index];
    setIsClicked([...newIsClicked]);
  };


  return (
    <Container>
      <TitleWrapper>
        <Title
          dangerouslySetInnerHTML={{
            __html: data.title && PrismicDOM.RichText.asHtml(data.title),
          }}
        />
      </TitleWrapper>
      <Dropdowns>
        {data.people &&
          data.people.map((item, index) => (
            <Dropdown key={index}>
              <DropdownHead onClick={() => toggleClick(index)}>
                <Name>{item.name}</Name>
                <Arrow>+</Arrow>
              </DropdownHead>
              <DropdownContent
                ref={(el) => (dropdownRef.current[index] = el)}
                className={isClicked[index] ? "dropdown-hide" : "dropdown-show"}
              >
                <LeftCol>
                  <img src={item.image.url} />
                </LeftCol>
                <RightCol>
                  <RightColTop>
                    <Role>{item.role}</Role>
                    <Text
                      dangerouslySetInnerHTML={{
                        __html:
                          item.description &&
                          PrismicDOM.RichText.asHtml(item.description),
                      }}
                    />
                  </RightColTop>
                  <Info>
                    <InfoLeftCol>
                      <div>
                        <a href={`mailto:${item.email}`}>{item.email}</a>
                      </div>
                      <div>
                        <a href={`tel:${item.number}`}>{item.number}</a>
                      </div>
                    </InfoLeftCol>
                    <InfoRightCol>
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            item.address &&
                            PrismicDOM.RichText.asHtml(item.address),
                        }}
                      />
                    </InfoRightCol>
                  </Info>
                </RightCol>
              </DropdownContent>
            </Dropdown>
          ))}
      </Dropdowns>
    </Container>
  );
};
