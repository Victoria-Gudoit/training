import React, { useState } from "react";
import "./../styles/module.style.css";

export const Counter = () => {
  const [count, setCount] = useState(0);
  function increase() {
    setCount(count + 1);
  }
  function disincrease() {
    setCount(count - 1);
  }
  return (
    <div>
      {count}
      <button className="increase" onClick={increase}>
        +
      </button>
      <button onClick={disincrease}>-</button>
    </div>
  );
};
