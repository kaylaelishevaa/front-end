import { useReducer } from "react";

interface Action {
  type: string;
  payload?: number;
}

function reducer(state: number, action: Action) {
  switch (action.type) {
    case "increment":
      return state + action.payload!;
    case "decrement":
      return state - action.payload!;
    case "square":
      return state * state;
    default:
      return state;
  }
}

export default function ComponentsUseReducer() {
  //   const [counter, setCounter] = useState(0);
  const [counter, dispatch] = useReducer(reducer, 0);

  function increment() {
    // setCounter(counter + 1);
    dispatch({ type: "increment", payload: 1 });
  }

  function decrement() {
    // setCounter(counter - 1);
    dispatch({ type: "decrement", payload: 1 });
  }

  //   function square() {
  //     dispatch({ type: "square", payload: counter });
  //   }

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button
        onClick={() => dispatch({ type: "square" })}
        //   onClick={() => setCounter(counter * counter)}
      >
        ^2
      </button>
    </>
  );
}
