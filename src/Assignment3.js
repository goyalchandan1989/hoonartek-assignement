import { useState } from "react";
const Assignment3 = () => {
  const value = [21, 42, 54, 1, 87, 90, 56, 27, 89];
  const [currentState, setCurrentState] = useState(0);
  const handleNextClick = () => {
    if (currentState < 6) setCurrentState(currentState+1);
  };

  const handlePreviousClick = () => {
    if (currentState > 0) setCurrentState(currentState-1   );
  };

  return (
    <div>
      <div>
        <button onClick={handlePreviousClick}>Previous</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
      <div>{value.slice(currentState, currentState+3).join(' , ')}</div>
    </div>
  );
};

export default Assignment3;
