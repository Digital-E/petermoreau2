import React, {useEffect, useState, useRef} from "react";
import styled from "styled-components";


const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-family: Druk Medium;
  font-size: 1.5rem;

  .is-active {
    background-color: black;
    color: white;
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

  :hover {
    background-color: black;
    color: white;
  }
`;

export default ({ data }) => {
let elementRefs = useRef([]);
let [isActive, setIsActive] = useState([]);
let interSectionObservers = null;

  useEffect(() => {
    if(data === null) return
    let initArray = [];
    for(let i = 0; i < data.length; i++) {
      initArray.push(false)
    }

    setIsActive([...initArray]);

  }, [data]);




  const navClick = (index) => {
    window.gsap.to(window, {duration: 1, scrollTo: `.section-${index + 2}`})


    let newIsActive = isActive;

    for(let i = 0; i < newIsActive.length; i++) {
      newIsActive[i] = false;
    }
    newIsActive[index] = true;

    setIsActive([...newIsActive]);
  }

  const navActive = (index) => {

    let newIsActive = isActive;

    for(let i = 0; i < newIsActive.length; i++) {
      newIsActive[i] = false;
    }
    newIsActive[index] = true;

    setIsActive([...newIsActive]);
  }

  //Intersection Observer Set-up

  useEffect(()=>{
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0
    }
    
    let callback = (entries, observer) => {
      entries.forEach(entry => {
        let sectionId = entry.target.getAttribute("section-id")
        console.log(entry.target.getAttribute("section-id"))

        navActive(sectionId - 2);

        console.log(entry)
        // Each entry describes an intersection change for one observed
        // target element:
        //   entry.boundingClientRect
        //   entry.intersectionRatio
        //   entry.intersectionRect
        //   entry.isIntersecting
        //   entry.rootBounds
        //   entry.target
        //   entry.time
      });
    };     


    let allSections = document.querySelectorAll(".section")

    allSections.forEach((section, index) => {
      let observer = new IntersectionObserver(callback, options);
      let target = document.querySelector(`.section-${index + 1}`);
      
      observer.observe(target); 
    }) 
   
       
  },[]);

  return (
    <Container>
      <LeftCol>
        <div onClick={() => navClick(-1)}>PM</div>
      </LeftCol>
      <RightCol>
        {data?.map((el, index) => (
          <Element key={index} ref={el => elementRefs.current[index] = el} onClick={() => navClick(index)} className={isActive[index] ? "is-active" : ""}>{el.navigation_element}</Element>
        ))}
      </RightCol>
    </Container>
  );
};
