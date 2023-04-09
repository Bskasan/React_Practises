import "./Counter.css";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>counter:{counter}</h1>
      <div>
        <button
          className="counter-button positive"
          onClick={() => dispatch({ type: "INCREASE" })}
        >
          Increase
        </button>
        <button
          className="counter-button zero"
          onClick={() => dispatch({ type: "RESET" })}
        >
          Reset
        </button>
        <button
          className="counter-button negative"
          onClick={() => dispatch({ type: "DECREASE" })}
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
