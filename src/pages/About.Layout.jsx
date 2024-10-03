import { useContext } from "react";
import { Link } from "react-router-dom";
import { themeContext } from "../2.Dark-ThemeV2/context/ThemeContext";

const About = () => {
  const { toggleTheme } = useContext(themeContext);

  return (
    <div>
      <h1>Welcome to About page</h1>
      <div style={{ display: "flex", gap: "12px" }}>
        <button onClick={toggleTheme}>Change Theme</button>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default About;
