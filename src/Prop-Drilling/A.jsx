import { useState } from "react";
import B from "./B";

const A = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button onClick={() => setCounter((val) => val + 1)}>Increment</button>
      <h1>I am A : {counter}</h1>
      <B uName="Manish" counter={counter} />
    </div>
  );
};

export default A;