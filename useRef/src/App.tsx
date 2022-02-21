import {useState, useRef} from "react";
import "./App.css";

const UseRef = () => {
  const input_data = useRef(null);

  return (
    <>
      <div>
        <input type="text" id="input_data" ref={input_data}></input>
      </div>
    </>
  );
};

export default useRef;
