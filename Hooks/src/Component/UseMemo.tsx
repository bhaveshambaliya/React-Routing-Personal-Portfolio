import React, {useMemo, useState} from "react";

function UseMemoHook() {
  const [state, setstate] = useState(0);
  const calculation = useMemo(() => expensiveCalculation(state), [state]);

  const increment = () => {
    setstate((c) => c + 1);
  };

  return (
    <div>
      <button onClick={increment}>Click Here</button>
      {calculation}
      {state}
    </div>
  );
}

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 10000000; i++) {
    num = num + 1;
  }
  return num;
};

export default UseMemoHook;
