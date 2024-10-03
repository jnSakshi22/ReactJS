import { useSelectedOption } from "../Context/DropdownContext";
import StateAboutPage from "./About.Layout";

const StateHomePage = () => {
  const { selectedOption, handleSelectChange } = useSelectedOption();
  return (
    <>
      <label htmlFor="state">Choose a state:</label>

      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="Maharashtra">Maharashtra</option>
        <option value="Madhya Pradesh">Madhya Pradesh</option>
        <option value="Gujrat">Gujrat</option>
        <option value="Tamil Nadu">Tamil Nadu</option>
        <option value="Rajasthan">Rajasthan</option>
        <option value="Himachal Pradesh">Himachal Pradesh</option>
        <option value="Goa">Goa</option>
      </select>
      <p>Selected State on HomePage: {selectedOption}</p>
      <StateAboutPage />
    </>
  );
};

export default StateHomePage;
