import { useContext, useEffect } from "react";
import { Context } from "../Context";
import SideMenu from "../components/SideMenu";

const MainPage = () => {
  const {
    darkMode,
    setDarkMode,
    theme,
    setTheme,
    darkTheme,
    lightTheme,
    drinks,
    setDrinks,
    toppings,
    setToppings,
    order
  } = useContext(Context);

  useEffect(() => {

    const fetchDrinks = async () => {
      const response = await fetch("http://localhost:5000/drinks")
      const data = await response.json()
      setDrinks(data);
    }

    const fetchToppings = async () => {
      const response = await fetch("http://localhost:5000/toppings")
      const data = await response.json()
      setToppings(data);
    }

    fetchDrinks();
    fetchToppings();
    console.log(drinks);
    console.log(toppings);
  }, []);


  useEffect(() => {
    setTheme(darkMode ? darkTheme : lightTheme)
  }, [darkMode])

  return (
    <div className={`${theme.bg} h-screen p-[20px] flex flex-row justify-center items-center font-bold`}>
      <div className={`w-[80%] ${theme.order}`}>
        Drink: {order.drink}
        <br/>
        Toppings: {order.toppings.toString()}
      </div>
      <div className="w-[20%]">
        <SideMenu />
        <button 
          className={`${theme.text} ${theme.button} p-[10px] rounded-3xl`} 
          onClick={() => {setDarkMode(darkMode => !darkMode)}}>
          Toggle Dark Mode
        </button>
      </div>
    </div>
  );
};

export default MainPage;
