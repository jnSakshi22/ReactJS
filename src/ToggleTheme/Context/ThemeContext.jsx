import { createContext, useContext, useState } from "react";

const themeContext = createContext(null);
const ThemeProvider = themeContext.Provider;

const ToggleThemeContext = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  const handleTheme = () => {
    setToggle((prev) => !prev);
  };

  return (
    <ThemeProvider value={{ toggle, handleTheme }}>{children}</ThemeProvider>
  );
};

export const useTheme = () => {
  return useContext(themeContext);
};

export default ToggleThemeContext;
