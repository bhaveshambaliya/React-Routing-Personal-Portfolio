import React, {useEffect, useRef, useState} from "react";

const UseRef = () => {
  const [show, setShow] = useState(false);
  const input_data = useRef(null);

  const submitForm = (e) => {
    e.preventDefault();
    console.log(input_data);
    const name = input_data.current.value;
    name == "" ? alert("Plz fill the field") : setShow(true);
  };
  useEffect(() => {
    input_data.current.focus();
  }, []);

  return (
    <div>
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="input_data">This is your lucky name</label>
          <br />
          <input type="text" id="input_data" ref={input_data} />
        </div>
        <br />
        <button>Submit</button>
      </form>
      <p>{show ? `Your lucky Name ${input_data.current.value}` : ""}</p>
    </div>
  );
};
export default UseRef;
