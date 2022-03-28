import React, { useState, useEffect, createContext, useContext } from "react";
import { useTheme } from "next-themes";

const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState();
  const { theme } = useTheme();

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;

export const useThemeContext = () => useContext(ThemeContext);
