import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.Layout";
// import Contact from "./pages/Contact.Layout";
// import About from "./pages/About.Layout";
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
import DropDownContext from "./DropDownTask/Context/DropdownContext";
import HeaderComponent from "./DropDownTask/Components/organisms/Header/Header.Component";
// import HomePage from "./ToggleTheme/Pages/Home.Layout";
import AboutPage from "./ToggleTheme/Pages/About.Layout";
import ContactPage from "./ToggleTheme/Pages/Contact.Layout";
import ToggleHeaderComponent from "./ToggleTheme/Components/Organisms/Header/ToggleHeader.Component";
import ToggleThemeContext from "./ToggleTheme/Context/ThemeContext";
import StopWatch from "./StopWatch/stopwatch";
import OTPBox from "./OTPFocusBox/OTPFocusBox";
import WithoutUseMemo from "./useMemo/WithoutUseMemoFiltered";
import InputForm from "./InputFocuswithQueryParameter/InputFocus";
import DynamicInputForm from "./InputFocuswithQueryParameter/DynamicInputFocus";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StopWatch />,
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
    element: <ContactPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
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
    element: <HeaderComponent />,
  },
  {
    path: "/toggleTheme",
    element: <ToggleHeaderComponent />,
  },
  {
    path: "/OTPFocus",
    element: <OTPBox />,
  },
  {
    path: "/FilteredProducts",
    element: <WithoutUseMemo />,
  },
  {
    path: "/InputForm",
    element: <InputForm />,
  },
  {
    path: "/DynamicInputForm",
    element: <DynamicInputForm />,
  },
]);
createRoot(document.getElementById("root")).render(
  <DropDownContext>
    <ProfileContext>
      <ThemeContext>
        <ToggleThemeContext>
          <RouterProvider router={router} />
        </ToggleThemeContext>
      </ThemeContext>
    </ProfileContext>
  </DropDownContext>
);
