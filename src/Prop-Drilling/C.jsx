import D from "./D";

const C = ({ uName, counter }) => {
  return (
    <div>
      <h1>I am C</h1>
      <D uName={uName} counter={counter} />
    </div>
  );
};

export default C;