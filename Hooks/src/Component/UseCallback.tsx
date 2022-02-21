import {useCallback, useState} from "react";

function UseCallbackHook() {
  const [state, setstate] = useState(0);

  const handleClick = useCallback(() => {
    setstate(state + 1);
  }, [state]);
  console.log(state);

  return (
    <div>
      <button onClick={handleClick}>Click Here</button>
      <p>{state}</p>
    </div>
  );
}

export default UseCallbackHook;
