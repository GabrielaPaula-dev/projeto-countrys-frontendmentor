import { ThemeTogglerButton } from "../theme-toggler-button";
import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context.jsx";
import styled from "styled-components";

const Header = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <TagHeader theme={theme}>
      <h2>Where in the world?</h2>
      <ThemeTogglerButton />
    </TagHeader>
  );
};

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 55px;
  color: ${props=> props.theme.color};
  background-color: ${props=> props.theme.elements};
  font-family: 'Nunito Sans', sans-serif;
  @media (max-width:520px) {
    padding: 20px 30px;
    h2{font-size: 19px;}
  }
  @media (max-width:360px) {
   flex-direction: column;
   gap: 0px;
  }
  
`;
export { Header };
