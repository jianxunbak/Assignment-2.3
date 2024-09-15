import { useState } from "react";
/* to make counter interactive, we need to manage soe data. this diatea that we manage in a component is known as state. */
/* react create hooks to allow us to "hook" into react internal features */

const SimpleCounter = () => {
  //use destructuing to set the value and fuction inside useState.
  const [count, setCount] = useState(0);
  const handlerPlus = () => {
    // //method 1: set th state directly using setState(newState)
    // //may not the the lastest value
    // setCount(count + 1);

    //method 2: Pass a callback i.e setState((=>(7)
    //the value is garunteed to be the lastest value
    //should use this method if the current value is dependent of previous value
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };
  const handlerMinus = () => {
    setCount((prevCount) => {
      return prevCount - 1;
    });
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <>
      <button onClick={handlerMinus}>-</button>
      <span>{count}</span>
      <button onClick={handlerPlus}>+</button>
      <br></br>
      <button onClick={reset}>reset</button>
    </>
  );
};

export default SimpleCounter;
