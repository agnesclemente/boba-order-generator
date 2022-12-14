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
    order,
    savedOrders,
    setSavedOrders
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

    const fetchSaved = async () => {
      const response = await fetch("http://localhost:5000/saved")
      const data = await response.json()
      setSavedOrders(data);
    }

    fetchDrinks();
    fetchToppings();
    fetchSaved();
    console.log(drinks);
    console.log(toppings);
  }, []);


  useEffect(() => {
    setTheme(darkMode ? darkTheme : lightTheme)
  }, [darkMode])

  const saveOrder = async () => {
    const id = await fetch('http://localhost:5000/saved/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ drink: order.drink, toppings: order.toppings }),
    })
    const newSavedOrders = [...savedOrders]
    newSavedOrders.push({
      _id: id,
      drink: order.drink,
      toppings: order.toppings
    });
    setSavedOrders(newSavedOrders);
    console.log(savedOrders)
  }

  const deleteSaved = async (orderId) => {
    await fetch('http://localhost:5000/saved/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ orderId: orderId }),
    })
    const newSavedOrders = savedOrders.filter(x => x._id !== orderId);
    setSavedOrders(newSavedOrders);
  }

  return (
    <div className={`${theme.bg} h-screen p-[20px] flex flex-row justify-center items-center font-bold`}>
      <div className={`w-[80%] ${theme.order}`}>
        Drink: {order.drink}
        <br/>
        Toppings: {order.toppings.toString()}
        <br/>
        <button 
          className={`${theme.text} ${theme.button} p-[10px] rounded-3xl`} 
          onClick={saveOrder}>
          save
        </button>
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
