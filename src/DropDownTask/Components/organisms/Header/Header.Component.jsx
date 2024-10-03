import { useSelectedOption } from "../../../Context/DropdownContext";
import StateHomePage from "../../../pages/Home.Layout";

const HeaderComponent = () => {
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
      <StateHomePage />
    </>
  );
};

export default HeaderComponent;
