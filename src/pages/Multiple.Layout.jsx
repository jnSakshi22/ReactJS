import { useState } from "react";
import { Link } from "react-router-dom";

const Multiple = () => {
  const [counter, setCounter] = useState(2);

  return (
    <div>
      <h1> Multiple Page</h1>
      <h3>Counter: {counter}</h3>
      <button onClick={() => setCounter(counter * 5)}>Multiple</button>
      <br />
      <Link to="/">Increment</Link>
      <br />
      <Link to="/decrement">Decrement</Link>
    </div>
  );
};

export default Multiple;
