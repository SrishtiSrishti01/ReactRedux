import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [amount, setamount] = useState(0);
  const addValue = Number(amount) || 0;
  const resetAll = () => {
    setamount(0);
    dispatch(reset());
  };
  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>

      <input
        type="text"
        value={amount}
        onChange={(e) => setamount(e.target.value)}
      ></input>
      <div>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>
          {" "}
          Add amount
        </button>
        <button onClick={resetAll}> reset All</button>
      </div>
    </section>
  );
};

export default Counter;
