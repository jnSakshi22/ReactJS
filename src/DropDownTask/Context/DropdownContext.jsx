import { createContext, useContext, useState } from "react";

const stateContext = createContext(null);
const StateProvider = stateContext.Provider;

const DropDownContext = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <StateProvider value={{ selectedOption, handleSelectChange }}>
        {children}
      </StateProvider>
    </>
  );
};

export const useSelectedOption = () => useContext(stateContext);

export default DropDownContext;
