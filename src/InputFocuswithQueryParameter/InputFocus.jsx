import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

const InputForm = () => {
  const [searchParams] = useSearchParams();

  const input1Ref = useRef();
  const input2Ref = useRef();
  const input3Ref = useRef();
  const input4Ref = useRef();

  useEffect(() => {
    const firstParam = searchParams.get("first");
    const secondParam = searchParams.get("second");
    const thirdParam = searchParams.get("third");
    const fourthParam = searchParams.get("fourth");

    if (firstParam) {
      input1Ref.current.focus();
    } else if (secondParam) {
      input2Ref.current.focus();
    } else if (thirdParam) {
      input3Ref.current.focus();
    } else if (fourthParam) {
      input4Ref.current.focus();
    }
  }, [searchParams]);

  console.log("SearchParam: ", searchParams);

  return (
    <div>
      <input ref={input1Ref} placeholder="Input 1" />
      <input ref={input2Ref} placeholder="Input 2" />
      <input ref={input3Ref} placeholder="Input 3" />
      <input ref={input4Ref} placeholder="Input 4" />
    </div>
  );
};

export default InputForm;
