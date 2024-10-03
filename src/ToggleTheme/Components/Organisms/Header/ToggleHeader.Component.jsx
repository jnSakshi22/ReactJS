import { Link } from "react-router-dom";
import { useTheme } from "../../../Context/ThemeContext";

const ToggleHeaderComponent = () => {
  const { toggle, handleTheme } = useTheme();
  return (
    <div
      style={{
        backgroundColor: toggle ? "black" : "white",
        color: toggle ? "white" : "black",
      }}
    >
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>

      <br />
      <button onClick={handleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ToggleHeaderComponent;
