import React, {useEffect, useState, useRef} from "react";
import styled from "styled-components";


const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: fit-content;
  font-family: Druk Medium;
  font-size: 1.5rem;

  .is-active {
    background-color: black;
    color: white;
  }

  @media(min-width: 992px) {
    width: 100%;
  }

  @media(max-width: 992px) {
    height: 30px;

    :after {
      position: fixed;
      content: "";
      top: 0;
      right: 0;
      height: 30px;
      width: 30px;
      background: rgb(255,255,255);
      background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
    }  
  }


`;

const LeftCol = styled.div`
  display: flex;
  align-items: center;

  > div {
    padding: 0 1.5rem;
    letter-spacing: 0.5rem;
    cursor: pointer;
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

  @media(min-width: 992px) {
  :hover {
    background-color: black;
    color: white;
  }
  }
`;

export default ({ data }) => {




  const navClick = (index) => {

    if(index === -1) {
      return window.gsap.to(window, {duration: 1, scrollTo: 0})
    }
    window.gsap.to(window, {duration: 1, scrollTo: `.section-${index + 3}`})

  }


  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      let sections = document.querySelectorAll(".section");
      let scrollPosition = window.scrollY


      sections.forEach(section => {
        if(section.offsetTop <= scrollPosition) {
          Array.from(document.querySelector(".nav").children).forEach(item => item.classList.remove("is-active"))

        if(Array.from(document.querySelector(".nav").children)[parseInt(section.getAttribute("section-id")) - 3] === undefined) return

        if(scrollPosition === document.body.scrollHeight - window.innerHeight) {
            return Array.from(document.querySelector(".nav").children)[4].classList.add("is-active")
          }
        
          
          Array.from(document.querySelector(".nav").children)[parseInt(section.getAttribute("section-id")) - 3].classList.add("is-active")

        }
      })
    })
  });

  return (
    <Container>
      <LeftCol>
        <div onClick={() => navClick(-1)}>PM</div>
      </LeftCol>
      <RightCol className="nav">
        {data?.map((el, index) => (
          <Element key={index}
          onClick={() => navClick(index)} 
          >
          {el.navigation_element}</Element>
        ))}
      </RightCol>
    </Container>
  );
};
