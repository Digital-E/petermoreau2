import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  font-family: "Century Expanded Regular";
  font-size: 0.75rem;

  > div {
    display: flex;
    align-items: flex-end;
    border-left: 1px solid black;
    padding: 0.1rem 0.5rem 0.1rem 0.2rem;
  }

  a {
    color: black;
    border: 1px solid transparent;
    text-decoration: none;
    position: relative;
    top: 2px;
    left: -1px;
  }

  .active-lang {
    border: 1px solid black;
    border-radius: 999px;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 25px;
  height: 25px;
  padding: 10px;
  border: 1px solid transparent;

  :hover {
    border: 1px solid black;
    border-radius: 999px;
  }
`;

export default () => {
  const router = useRouter();
  let linkWrapperRefs = useRef([]);

  const [languages] = useState([
    {
      code: "en",
      name: "En",
    },
    {
      code: "fr",
      name: "Fr",
    },
    {
      code: "es",
      name: "Es",
    },
  ]);

  useEffect(() => {
    let lang = router.query.lang;
    linkWrapperRefs.current.forEach((item) =>
      item.classList.remove("active-lang")
    );

    switch (lang) {
      case "en":
        linkWrapperRefs.current[0].classList.add("active-lang");
        break;
      case "fr":
        linkWrapperRefs.current[1].classList.add("active-lang");
        break;
      case "es":
        linkWrapperRefs.current[2].classList.add("active-lang");
        break;
    }
  });

  return (
    <Container>
      {languages.map((language, index) => {
        return (
          <div key={language.code}>
            <LinkWrapper ref={(el) => (linkWrapperRefs.current[index] = el)}>
              <Link as={`/${language.code}/`} href={`/[lang]`}>
                <a>{language.name}</a>
              </Link>
            </LinkWrapper>
          </div>
        );
      })}
    </Container>
  );
};
