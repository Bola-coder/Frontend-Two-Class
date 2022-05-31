import React, { useState } from "react";
import "./../css/count.css";

const Count = () => {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const handleIncrement = () => {
    setCount((current) => current + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  const toggleDarkMode = () => {
    setDark((current) => !current);
  };

  return (
    <section>
      <button onClick={toggleDarkMode}>Toggle dark Mode</button>
      <div className={dark ? "dark" : "light"}>
        <h2>Count Components</h2>
        <p>{count}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </section>
  );
};

export default Count;
