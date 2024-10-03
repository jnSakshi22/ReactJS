import { useContext } from "react";
import { aContext } from "./A";

const D = () => {
  // Fourth. Connect the provider
  const aData = useContext(aContext);
  console.log("AData: ", aData);
  return (
    <div>
      <h1 style={{ color: aData.darkTheme ? "#fff" : "#000" }}>
        I am D: {aData.uName}: {aData.counter} {aData.uCountry}
      </h1>
    </div>
  );
};

export default D;