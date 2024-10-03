import { useContext } from "react";
import { themeContext } from "../../context/ThemeContext";
import Header from "../../Components/organism/Header/Header.Component";

const Homepage = () => {
  const { toggleTheme } = useContext(themeContext);
  return (
    <>
      <Header />
      <section>
        <h1>I am homepage</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </section>
    </>
  );
};

export default Homepage;
