import { useSelectedOption } from "../Context/DropdownContext";
import StateContactPage from "./Contact.Layout";

const StateAboutPage = () => {
  const { selectedOption } = useSelectedOption();
  return (
    <>
      <p>Selected State on AboutPage: {selectedOption}</p>
      <StateContactPage />
    </>
  );
};

export default StateAboutPage;
