import { useEffect, useState } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [isStop, setIsStop] = useState(true);

  useEffect(() => {
    let timInterval = null;

    console.log("Start Value: ", isStart);
    console.log("Stop Value: ", isStop);

    if (isStart && isStop === false) {
      timInterval = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    } else {
      clearInterval(timInterval);
    }
    return () => {
      clearInterval(timInterval);
    };
  }, [isStart, isStop]);

  const handleStart = () => {
    setIsStart(true);
    setIsStop(false);
  };

  const handleStop = () => {
    setIsStop(true);
  };

  const handleReset = () => {
    setIsStart(false);
    setTime(0);
  };

  const hours = Math.floor(time / 3600000);
  const minutes = Math.floor((time % 3600000) / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = time % 1000;

  return (
    <>
      <h1>
        Timer: {hours} hour: {minutes} mins: {seconds} sec: {milliseconds} ms
      </h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default StopWatch;
