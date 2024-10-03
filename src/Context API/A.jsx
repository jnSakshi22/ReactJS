import { useState } from "react";
import B from "./b";

// export const aContext = createContext(null);
// const AProvider = aContext.Provider;

const A = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(true);
  };
  return (
    <div
      style={{
        backgroundColor: toggle ? "black" : "white",
        color: toggle ? "white" : "black",
      }}
    >
      {/* <AProvider value={toggle} /> */}
      <h1>I am A</h1>
      <button onClick={handleToggle}>Change Theme</button>
      <B />
    </div>
  );
};

export default A;
