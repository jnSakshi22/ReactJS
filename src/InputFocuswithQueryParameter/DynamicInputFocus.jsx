import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

const params = ["first", "second", "third", "fourth"];

const DynamicInputForm = () => {
  const [searchParams] = useSearchParams();

  const inputRefs = useRef([]);

  useEffect(() => {
    params.forEach((param, index) => {
      const paramValue = searchParams.get(param);
      if (paramValue && inputRefs.current[index]) {
        inputRefs.current[index].focus();
      }
    });
  }, [searchParams]);

  return (
    <div>
      {params.map((param, index) => (
        <input
          key={param}
          ref={(el) => (inputRefs.current[index] = el)}
          placeholder={`Enter ${param}`}
        />
      ))}
    </div>
  );
};

export default DynamicInputForm;
