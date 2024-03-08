import React from "react";
import classes from  './Home.module.scss'

const Home = () => {
  const [count, setCount] = React.useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1 className={classes.title}>{count}</h1>
      <button className={classes.green} onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Home;
