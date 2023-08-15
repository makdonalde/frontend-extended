import { useState } from "react";
import classes from "./Counter.module.scss";
export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className={classes.btn}>{count} - counter</div>
      <button onClick={() => setCount(count + 1)}> increment</button>
      <button
        onClick={() => {
          if (count > 0) setCount(count - 1);
        }}
      >
        deincrement
      </button>
    </>
  );
};
