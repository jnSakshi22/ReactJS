import { createContext, useEffect, useState } from "react";
import B from "./B";

// First. - Defined a context
export const aContext = createContext(null);

// Second. - Define a provider
const AProvider = aContext.Provider;

const AWithContext = () => {
  const [counter, setCounter] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = darkTheme ? "#000" : "#fff";
  }, [darkTheme]);

  return (
    //  Third. - Wrap the component with the provider
    <AProvider
      value={{
        counter: counter,
        uName: "Manish",
        uCountry: "Bharat",
        setCounter,
        darkTheme,
      }}
    >
      <button onClick={() => setCounter((val) => val + 1)}>Increment</button>
      <button onClick={() => setDarkTheme((val) => !val)}>Toggle Theme</button>
      <h1 style={{ color: darkTheme ? "#fff" : "#000" }}>I am A : {counter}</h1>
      <B />
    </AProvider>
  );
};

export default AWithContext;