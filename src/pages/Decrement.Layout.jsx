import { useState } from "react";
import { Link } from "react-router-dom";

const Decrement = () => {
  const [counter, setCounter] = useState(8);

  return (
    <div>
      <h1> Decrement Page</h1>
      <h3>Counter: {counter}</h3>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>

      <br />
      <Link to="/">Increment</Link>
      <br />
      <Link to="/multiple">Multiple</Link>
    </div>
  );
};

export default Decrement;
