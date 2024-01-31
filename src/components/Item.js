import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [inCart, setCart] = useState(false)
  function handleClick(event){
    setCart(true);
    event.target.textContent = "Remove From Cart";
  }
  const itemClass = false ? "":"in-cart"
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add"onClick={handleClick}>Add to Cart</button>
    </li>
  );
}

export default Item;
