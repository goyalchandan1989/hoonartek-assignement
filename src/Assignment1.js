import { useState, useEffect } from "react";

const Assignment1 = () => {
  const [input1, setInput1] = useState(100);
  const [input2, setInput2] = useState(0);

  const handleChangeInput2 = (e) => {
    if (+e.target.value <= 100) {
      setInput2(+e.target.value);
      setInput1(100 - +e.target.value);
    } else {
      setInput2(100);
      setInput1(0);
    }
  };

  const handleChangeInput1 = (e) => {
    if (+e.target.value <= 100) {
      setInput1(+e.target.value);
      setInput2(100 - +e.target.value);
    } else {
      setInput1(100);
      setInput2(0);
    }
  };

  return (
    <div style={{ marginTop: "10%", marginLeft: "20%" }}>
      <div>
        <label>Input 1:</label>
        <input
          type="number"
          min="0"
          max="100"
          id="input1"
          maxLength={3}
          value={input1}
          onChange={(e) => handleChangeInput1(e)}
        />
      </div>
      <div>
        <label>Input 2:</label>
        <input
          type="number"
          min="0"
          max="100"
          id="input2"
          value={input2}
          onChange={(e) => handleChangeInput2(e)}
        />
      </div>
    </div>
  );
};

export default Assignment1;
