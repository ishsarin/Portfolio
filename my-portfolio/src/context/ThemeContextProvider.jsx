import React from "react";
import { createContext } from "react";
import { useState } from "react";
const ThemeContext = createContext();
const ThemeContextProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContextProvider, ThemeContext };
