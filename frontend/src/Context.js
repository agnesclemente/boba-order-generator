import React, { createContext, useState } from "react";

export const Context = createContext({
  darkMode: true,
  setDarkMode: () => { },
});

const ContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const initialContext = {
    darkMode,
    setDarkMode,
  };

  return <Context.Provider value={initialContext}>{children}</Context.Provider>;
};

export default ContextProvider;
