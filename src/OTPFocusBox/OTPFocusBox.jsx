import { useState, useRef } from "react";

const OTPBox = () => {
  const length = 6;
  const [otpInput, setOtpInput] = useState("");
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);
  console.log("InputRefs: ", inputRefs);

  const handleOTPChange = (newOtp) => {
    setOtpInput(newOtp);
    console.log("OTP:", newOtp);
  };

  const handleChange = (e, index) => {
    const value = e.target.value;
    console.log("Value: ", !/^[0-9]$/.test(value) && value !== "");
    if (!/^[0-9]$/.test(value) && value !== "") return; // numbers

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    handleOTPChange(newOtp.join(""));

    if (value && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (otp[index] === "" && index > 0) {
        inputRefs.current[index - 1].focus();
      } else {
        const newOtp = [...otp];
        console.log("New OTP: ", newOtp, newOtp[index]);
        newOtp[index] = "";
        setOtp(newOtp);
        handleOTPChange(newOtp.join(""));
      }
    }
  };

  return (
    <div>
      <h2>Enter OTP</h2>
      <div>
        {otp.map((otpValue, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={otpValue}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(el) => (inputRefs.current[index] = el)}
            style={{
              width: "40px",
              height: "40px",
              margin: "5px",
              fontSize: "20px",
              textAlign: "center",
            }}
          />
        ))}
      </div>
      <p>OTP Entered: {otpInput}</p>
    </div>
  );
};

export default OTPBox;
