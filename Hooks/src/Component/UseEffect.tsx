import {useState, useEffect} from "react";

function UseEffectHook() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`You clicked ${count} times`);
  });
  useEffect(() => {
    console.log(`You clicked ${count} times`);
  }, []);
  useEffect(() => {
    console.log(`You clicked ${count} times`);
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default UseEffectHook;
