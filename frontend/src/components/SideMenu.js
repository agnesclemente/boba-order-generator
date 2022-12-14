import { useContext, useEffect, useState } from "react";
import { Context } from "../Context";

const SideMenu = () => {
  const {
      theme,
      numToppings,
      setNumToppings,
      order,
      setOrder,
      drinks,
      toppings
  } = useContext(Context);

  const random = (array) => {
    return array[Math.floor(Math.random()*array.length)]; 
  }

  const generateOrder = () => {
    const newToppings = [];
    while (newToppings.length < numToppings) {
      const topping = random(toppings).name;
      if (!newToppings.includes(topping)) {
        newToppings.push(topping);
      }
    }
    const newOrder = {
      drink: random(drinks).name,
      toppings: newToppings
    }
    setOrder(newOrder);
    console.log(order)
  }

  return (
    <>
      <div className={`${theme.button} rounded-3xl ${theme.text} p-[10px] pb-[20px] items-center m-3 text-xl`}>
        <div className="mb-[30px]">
          Toppings: {numToppings}
          <input className="form-range appearance-none" type="range" min="0" max="7" value={numToppings} onChange={(event) => setNumToppings(event.target.value)} />
          <button onClick={generateOrder}>Generate</button>
        </div>
      </div>
    </>
  );
};
  
export default SideMenu;