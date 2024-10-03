import { useSelectedOption } from "../Context/DropdownContext";
import StateAboutPage from "./About.Layout";

const StateHomePage = () => {
  const { selectedOption } = useSelectedOption();
  return (
    <>
      <p>Selected State on HomePage: {selectedOption}</p>
      <StateAboutPage />
    </>
  );
};

export default StateHomePage;
