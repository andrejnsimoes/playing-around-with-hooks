import React, { useState } from "react";
import tdxWhite from "./images/tdxWhite.png";
import tdxBlue from "./images/tdxBlue.png";

const ThemeContext = React.createContext("dark");

const imageEndpoint = {
  light: tdxBlue,
  dark: tdxWhite
};

const ThemeStore = () => {
  const [theme, setTheme] = useState("light");

  const toggleDarkMode = () => setTheme("dark");
  const toggleLightMode = () => setTheme("light");

  return { theme, toggleDarkMode, toggleLightMode, logo: imageEndpoint[theme] };
};

export const ThemeProvider = children => {
  return <ThemeContext.Provider value={ThemeStore()} {...children} />;
};

export default ThemeContext;
