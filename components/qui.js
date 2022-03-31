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

  .arrow-active {
    transform: rotateZ(0deg);
    transition-duration: 0.3s;
  }

  .arrow-inactive {
    transform: rotateZ(180deg);
    transition-duration: 0.3s;
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

const Dropdowns = styled.div``;

const Dropdown = styled.div``;

const DropdownHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const Name = styled.div`
  margin: 0;
  font-family: "Century Expanded Regular";
  font-size: 2rem;
  font-weight: 300;
  padding: 1.5rem;
  text-align: center;
  width: 100%;
  text-transform: uppercase;

  @media (min-width: 992px) {
    font-size: 3rem;
    padding: 1.5rem;
  }
`;

const Arrow = styled.div`
  height: 40px;
  width: 40px;
  margin-right: 1.5rem;
`;

const DropdownContent = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 2px solid black;
  flex-wrap: wrap;

  > div {
    flex-basis: 100%;
  }

  @media (min-width: 992px) {
    flex-wrap: nowrap;

    > div {
      flex-basis: 50%;
    }
  }
`;

const LeftCol = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  border-bottom: 2px solid black;

  @media (min-width: 992px) {
    border-right: 2px solid black;
  }
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
  font-size: 1.3rem;
  font-weight: 300;
  padding: 0.75rem;
  text-align: center;
  border-bottom: 2px solid black;

  @media (min-width: 992px) {
    font-size: 1.7rem;
  }
`;

const Text = styled.div`
  font-family: "Century Expanded Regular";
  font-size: 1.25rem;
  font-weight: 300;
  padding: 1rem 1rem 1rem 1rem;

  p {
    margin: 0;
    margin-top: 15px;
  }

  p:nth-child(n + 2) {
    // text-indent: 50px;
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
  flex-wrap: wrap;

  a {
    color: black;
    text-decoration: none;
  }

  @media (min-width: 992px) {
    flex-wrap: nowrap;
  }
`;

const InfoLeftCol = styled.div`
  flex-basis: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    flex-basis: 50%;
  }
`;

const InfoRightCol = styled.div`
  flex-basis: 100%;
  padding-top: 1.5rem;

  p {
    margin: 0;
  }

  @media (min-width: 992px) {
    padding-top: 0;
    flex-basis: 50%;
  }
`;

const RightColTop = styled.div``;

const LinkWrapper = styled.div`
  font-family: "Century Expanded Regular";
  font-size: 1.25rem;
  font-weight: 300;
  padding: 1rem 1rem 1rem 1rem;
`;

export default ({ data }) => {
  let dropdownRef = useRef([]);
  let [isClicked, setIsClicked] = useState([]);

  useEffect(() => {
    if (data.people === null) return;
    let initArray = [];
    for (let i = 0; i < data.people.length; i++) {
      initArray.push(false);
    }

    setIsClicked([...initArray]);
  }, [data]);

  const toggleClick = (index) => {
    let newIsClicked = isClicked;
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
                <Arrow
                  className={
                    isClicked[index] === false
                      ? "arrow-active"
                      : "arrow-inactive"
                  }
                >
                  <svg viewBox="0 0 39.42 39.42">
                    <polygon points="20.81 27.61 20.81 7.98 18.62 7.98 18.62 27.61 14.83 23.74 13.26 25.21 19.71 31.44 26.16 25.21 24.63 23.74 20.81 27.61" />
                    <path d="M19.71,39.42A19.71,19.71,0,1,1,39.42,19.71,19.73,19.73,0,0,1,19.71,39.42ZM19.71,2A17.71,17.71,0,1,0,37.42,19.71,17.73,17.73,0,0,0,19.71,2Z" />
                  </svg>
                </Arrow>
              </DropdownHead>
              <DropdownContent
                ref={(el) => (dropdownRef.current[index] = el)}
                className={
                  isClicked[index] === false ? "dropdown-hide" : "dropdown-show"
                }
              >
                <LeftCol>
                  <img src={item.image ? item.image.url : null} />
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
                    <LinkWrapper>
                      <a href={item.link && item.link.url} target="_blank">
                        {item.link_text}
                      </a>
                    </LinkWrapper>
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
