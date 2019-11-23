import React, { useState } from "react";
const ThemeContext = React.createContext("dark");

const ThemeStore = () => {
  const [theme, setTheme] = useState("light");

  const toggleDarkMode = () => setTheme("dark");
  const toggleLightMode = () => setTheme("light");

  return { theme, toggleDarkMode, toggleLightMode };
};

export const ThemeProvider = children => {
  return <ThemeContext.Provider value={ThemeStore()} {...children} />;
};

export default ThemeContext;
