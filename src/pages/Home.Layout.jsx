import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { themeContext } from "../2.Dark-ThemeV2/context/ThemeContext";

const Home = () => {
  const { toggleTheme } = useContext(themeContext);
  const [count, setCount] = useState(0);
  // useEffect(() => {
  //   const location = window.location;
  //   console.log("This is info that");
  // }, []);
  return (
    <div>
      <h1>Welcome to Home page: {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>

      <div style={{ display: "flex", gap: "12px" }}>
        <button onClick={toggleTheme}>Change theme</button>
        <a href="/about">About</a>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </div>
  );
};

export default Home;
