import React from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
import pizzas from '../pizzas';
import '../App.css';

const Home= () => {
  return(
    <div className="pizza-list">
      {pizzas.map(pizza =>(
        <CardPizza key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
};
export default Home;