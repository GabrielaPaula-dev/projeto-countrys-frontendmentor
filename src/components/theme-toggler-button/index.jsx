import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { ThemeContext, themes } from "../../contexts/theme-context";

const ThemeTogglerButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  localStorage.setItem("themeSelect", JSON.stringify(theme ?? themes.dark));
  const changeTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light);
    localStorage.setItem("themeSelect", JSON.stringify(theme));
  };
  return (
    <Button theme={theme} onClick={() => changeTheme()}>
      <img src={theme.star} alt="Imagem do modo dark ou ligth" />
      <p>{theme.mode} Mode</p>
    </Button>
  );
};
const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: transparent;
  border: none;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 800;
  font-size: 16px;
  ${(props) =>
    props.theme.mode == "Light" &&
    css`
      filter: invert(100%);
    `}
  img {
    width: 30px;
    height: 30px;
  }
  @media (max-width: 430px) {
    gap: 0;
    p {
      font-size: 14px;
    }
  }
`;
export { ThemeTogglerButton };
