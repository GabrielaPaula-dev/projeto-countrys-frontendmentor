import React, { createContext, useState } from "react";
import sol from "../assets/sol.png";
import lua from "../assets/lua.png";

export const themes = {
  dark: {
    mode: "Light",
    color: "#ffffff",
    background: "#202c37",
    input: "#858585",
    elements: "#2b3945",
    star: sol,
  },
  light: {
    mode: "Dark",
    color: "#111517",
    background: "#fafafa",
    input: "#858585",
    elements: "#ffffff",
    star: lua,
  },
};

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
  const themeSelect = JSON.parse(localStorage.getItem("themeSelect"));
  const [theme, setTheme] = useState(themeSelect);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
