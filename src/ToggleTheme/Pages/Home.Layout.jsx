import { Link } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";

const HomePage = () => {
    const { toggle, handleTheme } = useTheme();
  return (
    <div>
      <Link to="/about">About</Link>
      <br />
      <Link to="/contact">Contact</Link>
      <br />
      <h1>I am Home Component</h1>
    </div>
  );
};

export default HomePage;
