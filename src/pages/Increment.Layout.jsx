import { useState } from "react";
import { Link } from "react-router-dom";

const Increment = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1> Increment Page</h1>
      <h3>Counter: {counter}</h3>
      <button onClick={() => setCounter((prev) => prev + 1)}>Increment</button>
      <br />
      <Link to="/decrement">Decrement</Link>
      <br />
      <Link to="/multiple">Multiple</Link>
    </div>
  );
};

export default Increment;
