import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import LanguageSelector from "./language-selector";
import Navigation from "./navigation";

const Container = styled.div``;

const NavBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  z-index: 999;
  background: white;
  overflow-x: scroll;
  border-bottom: 1px solid black;
`;

const Logo = styled.div`
  margin: 2.5rem 1.5rem 1rem 1.5rem;
  width: 100%;
  top: 0;
  left: 0;

  svg {
    width: 60%;
  }

  @media (max-width: 576px) {
    svg {
      width: 70%;
    }
  }
`;

const BottomBar = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  font-family: "Century Expanded Regular";
  font-size: 1rem;
  display: flex;
  padding: 0.3rem 1.5rem;
  border-top: 2px solid black;
  border-bottom: 5px solid black;
  width: 100%;
  z-index: 1;
  background: white;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

const LeftCol = styled.div``;

const RightCol = styled.div`
  margin-left: 0;

  @media (min-width: 992px) {
    margin-left: 5rem;
  }
`;

export default ({ data }) => {
  const setFixedLogo = () => {
    let logoRef = document.querySelector("#logoRef");
    let bottombarRef = document.querySelector("#bottombarRef");
    //Reset
    logoRef.style.position = "relative";
    logoRef.style.height = "auto";
    document.querySelector(".section-2").style.marginTop = `0px`;
    //Reset
    let marginSize =
      3 * parseFloat(getComputedStyle(document.documentElement).fontSize);
    let logoHeight = logoRef.getBoundingClientRect().height;
    logoRef.style.height = `${logoHeight}px`;
    logoRef.style.position = "fixed";
    //
    bottombarRef.style.top = `${logoHeight + marginSize}px`;
    document.querySelector(".section-2").style.marginTop = `${
      logoHeight + marginSize
    }px`;
  };

  useEffect(() => {
    setFixedLogo();

    window.addEventListener("resize", () => setFixedLogo());
  }, []);

  return (
    <Container>
      <NavBar>
        <Navigation data={data.navigationElements} />
        <LanguageSelector />
      </NavBar>

      <BottomBar id="bottombarRef">
        <LeftCol>{data.subTitleOne}</LeftCol>
        <RightCol>{data.subTitleTwo}</RightCol>
      </BottomBar>
    </Container>
  );
};
