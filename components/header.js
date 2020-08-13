import React from "react";
import styled from "styled-components";
import LanguageSelector from "./language-selector";
import Navigation from "./navigation";

const Container = styled.div``;

const NavBar = styled.div`
  display: flex;

  border: 1px solid black;
`;

const Logo = styled.div`
  margin: 1.5rem;
  svg {
    width: 70%;
  }
`;

const BottomBar = styled.div`
  display: flex;
  font-family: "Century Expanded Regular";
  font-size: 0.75rem;
  display: flex;
  padding: 0.3rem 1.5rem;
  border-top: 1px solid black;
  border-bottom: 5px solid black;
`;

const LeftCol = styled.div``;

const RightCol = styled.div`
  margin-left: 5rem;
`;

export default ({ data }) => {
  return (
    <Container>
      <NavBar>
        <Navigation data={data.navigationElements} />
        <LanguageSelector />
      </NavBar>
      <Logo>
        <svg x="0px" y="0px" viewBox="0 0 976.7 642.4">
          <path
            d="M563.2,171.2h11.6c14.4,0,16.8,5.8,16.8,19.5v93.1c0,16.6,2.4,22,4.4,25.4H641v-2.1c-2-4.6-4.4-10-4.4-22.8V175.8
    c0-21.2-9.6-29.1-19.7-33.7c8-3.3,19.7-13.7,19.7-39.5V47.8c0-34.9-14.8-47.8-45.3-47.8h-73.4v309.2h45.3V171.2z M563.2,42h12
    c14,0,16.4,6.7,16.4,20v43.2c0,13.7-4,22-16.4,22h-12V42z M395.2,0v309.2h105.5v-47h-60.1v-89.3h45.3v-47h-45.3v-81h57.8V0L395.2,0z
     M257.3,0v44.9h38.1v264.3h44.9V44.9h38.1V0H257.3z M137.5,0v309.2H243v-47h-60.2v-89.3h45.3v-47h-45.3v-81h57.8V0H137.5z M45.3,42
    h11.6c13.2,0,15.6,9.2,15.6,21.2v50.7c0,12.9-1.6,22.4-15.6,22.4H45.3V42z M71.8,180.8c30.9,0,46.5-19.9,46.5-56.5V51.1
    c0-37-14.4-51.1-46.5-51.1H0v309.2h45.3V180.8H71.8z"
          />
          <path
            d="M855.2,571.4c0,44.9,16.5,71.1,56.5,71.1h8c40.1,0,56.9-27.4,56.9-71.1V329.5h-46.1v244.8c0,13.7-4,22-14.8,22
    c-10,0-14.4-8.7-14.4-22V329.5h-46.1V571.4z M778.7,420.1l12,114.3H767L778.7,420.1z M801.5,638.7h43.7l-38.9-309.2h-53.7
    l-36.5,309.2h40.5l5.6-58.2h33.3L801.5,638.7z M599.4,329.5v309.2h105.5v-47h-60.1v-89.4H690v-46.9h-45.2v-81h57.7v-44.9H599.4z
     M504.8,500.7h11.6c14.4,0,16.8,5.8,16.8,19.5v93.1c0,16.6,2.4,22,4.4,25.3h44.9v-2.1c-2-4.6-4.4-10-4.4-22.9V505.3
    c0-21.2-9.6-29.1-19.6-33.7c8-3.3,19.6-13.7,19.6-39.5v-54.8c0-34.9-14.8-47.8-45.3-47.8h-73.4v309.2h45.3L504.8,500.7z
     M504.8,371.5h12c14,0,16.4,6.7,16.4,20v43.2c0,13.7-4,22-16.4,22h-12V371.5z M392.1,573c0,13.3-2.8,23.7-15.2,23.7
    c-12.8,0-16.4-10.4-16.4-23.7V395.2c0-16.2,4.4-23.7,16-23.7c10.4,0,15.6,7.9,15.6,23.7L392.1,573z M438.2,397.2
    c0-42.4-14-70.6-58.1-70.6h-7.6c-42.9,0-58.1,27.8-58.1,71.1v172c0,43.2,15.2,72.7,58.5,72.7h7.6c43.7,0,57.7-29.5,57.7-72.7V397.2z
     M137.1,638.7h40.5V438.8l27.7,199.9h18l27.3-199.9v199.9H293V329.5h-54.1l-22.1,163.3l-21.6-163.3h-58.1V638.7z"
          />
        </svg>
      </Logo>
      <BottomBar>
        <LeftCol>{data.subTitleOne}</LeftCol>
        <RightCol>{data.subTitleTwo}</RightCol>
      </BottomBar>
    </Container>
  );
};
