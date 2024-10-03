import { Link } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";

const ContactPage = () => {
    const { toggle, handleTheme } = useTheme();
  return (
    <div>
      <Link to="/home">Home</Link>
      <br/>
      <Link to="/about">About</Link>
      <br />
      <h1>I am Contact Component</h1>
    </div>
  );
};

export default ContactPage;
