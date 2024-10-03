import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.Layout";
import Contact from "./pages/Contact.Layout";
import About from "./pages/About.Layout";
import AmazonProductDetails from "./pages/AmazonProductDetails.Layout";
import Profile from "./pages/Profile";
import Increment from "./pages/Increment.Layout";
import NotFound from "./pages/404.Layout";
import Decrement from "./pages/Decrement.Layout";
import Multiple from "./pages/Multiple.Layout";
import A from "./Prop-Drilling/A";
import AWithContext from "./1.Context-Basic/A";
import Homepage from "./2.Dark-ThemeV2/pages/HomePage/HomePage.layout";
import ThemeContext from "./2.Dark-ThemeV2/context/ThemeContext";
import ProfileContext from "./2.Dark-ThemeV2/context/profileContext";
import StateHomePage from "./DropDownTask/pages/Home.Layout";
import DropDownContext from "./DropDownTask/Context/DropdownContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/themev2",
    element: <Homepage />,
  },
  {
    path: "/prop-drill",
    element: (
      <>
        <AWithContext />
      </>
    ),
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },

  {
    path: "/:slug/dp/:productId",
    element: <AmazonProductDetails />,
  },

  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/increment",
    element: <Increment />,
  },
  {
    path: "/decrement",
    element: <Decrement />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/multiple",
    element: <Multiple />,
  },
  {
    path: "/theme-component",
    elements: <A />,
  },
  {
    path: "/language",
    element: <StateHomePage />,
  },
]);
createRoot(document.getElementById("root")).render(
  <DropDownContext>
    <ProfileContext>
      <ThemeContext>
        <RouterProvider router={router} />
      </ThemeContext>
    </ProfileContext>
  </DropDownContext>
);
