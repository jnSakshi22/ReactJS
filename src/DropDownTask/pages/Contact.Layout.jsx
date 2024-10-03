import { useSelectedOption } from "../Context/DropdownContext";

const StateContactPage = () => {
  const { selectedOption } = useSelectedOption();
  return (
    <>
      <p>Selected State on ContactPage: {selectedOption}</p>
    </>
  );
};

export default StateContactPage;
