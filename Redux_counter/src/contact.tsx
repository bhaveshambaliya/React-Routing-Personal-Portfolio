import React from "react";
import reactDom from "react-dom";
import {useDispatch} from "react-redux";
import {useLocation} from "react-router-dom";

const Contact = () => {
  const {state} = useLocation();
  console.log(state);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Increment and Decrement {state.myState}</h1>
      <button onClick={() => {}}>Increment</button>
      <button onClick={() => {}}>Decrement</button>
    </div>
  );
};
export default Contact;
