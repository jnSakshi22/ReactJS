import D from "./D";

const C1 = (props) => {
  return (
    <div>
      <h1>I am C</h1>
      <D uName="uvesh" {...props} />
    </div>
  );
};

export default C1;
