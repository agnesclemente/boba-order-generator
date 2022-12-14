import React, { createContext, useState } from "react";

export const Context = createContext({
  darkMode: true,
  setDarkMode: () => { },
  theme: null,
  setTheme: () => { },
  darkTheme: null,
  lightTheme: null,
  numToppings: 0,
  setNumToppings: () => {},
  drinks: [],
  setDrinks: () => {},
  toppings: [],
  setToppings: () => {},
  order: {},
  setOrder: () => {},
  savedOrders: [],
  setSavedOrders: () => {},
});

const ContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const darkTheme = {
    bg: "bg-[#16181c]",
    text: "text-[#201D26]",
    button: "bg-[#f472b6]",
    order: "text-[#f472b6]"
  }

  const lightTheme = {
    bg: "bg-[#FEFCF3]",
    text: "text-[#FEFCF3]",
    button: "bg-[#DBA39A]",
    order: "text-[#DBA39A]"
  }

  const [theme, setTheme] = useState(darkMode ? darkTheme : lightTheme);
  const [numToppings, setNumToppings] = useState(3);
  const [drinks, setDrinks] = useState([]);
  const [toppings, setToppings] = useState([]);
  const [order, setOrder] = useState({
    drink: "",
    toppings: [],
  });
  const [savedOrders, setSavedOrders] = useState([]);

  const initialContext = {
    darkMode,
    setDarkMode,
    theme,
    setTheme,
    darkTheme,
    lightTheme,
    numToppings,
    setNumToppings,
    drinks,
    setDrinks,
    toppings,
    setToppings,
    order,
    setOrder,
    savedOrders,
    setSavedOrders,
  };

  return <Context.Provider value={initialContext}>{children}</Context.Provider>;
};

export default ContextProvider;
