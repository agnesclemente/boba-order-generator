import { useContext, useEffect, useState } from "react";
import { Context } from "../Context";

const MainPage = () => {
  const {
    darkMode,
    setDarkMode
  } = useContext(Context);

  const darkTheme = {
    bg: "bg-[#16181c]",
    text: "text-[#201D26]",
    button: "bg-[#f472b6]"
  }

  const lightTheme = {
    bg: "bg-[#FEFCF3]",
    text: "text-[#FEFCF3]",
    button: "bg-[#DBA39A]"
  }
  const [theme, setTheme] = useState(darkMode ? darkTheme : lightTheme);

  useEffect(() => {
    setTheme(darkMode ? darkTheme : lightTheme)
  }, [darkMode])

  return (
    <div className={`${theme.bg} h-screen p-[20px] flex flex-col justify-center items-center`}>
      <button className={`${theme.text} ${theme.button} p-[10px] rounded-3xl`} onClick={() => {setDarkMode(darkMode => !darkMode)}}>Toggle Dark Mode</button>
    </div>
  );
};

export default MainPage;
