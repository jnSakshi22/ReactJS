import { Link } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";

const AboutPage = () => {
    const { toggle, handleTheme } = useTheme();
  return (
    <div>
      <Link to="/home">Home</Link>
      <br/>
      <Link to="/contact">Contact</Link>
      <br />
      <h1>I am About Component</h1>
    </div>
  );
};

export default AboutPage;
