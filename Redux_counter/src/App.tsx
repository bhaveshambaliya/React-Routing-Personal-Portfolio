import {useSelector, useDispatch} from "react-redux";
import {increment, decrement} from "./actions";
import {Link} from "react-router-dom";

const App = () => {
  const myState = useSelector((state) => state.Increment_function);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h1>Increment And Decrement</h1>
        <input type="number" value={myState} readOnly />
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <div>
        <Link to="/contact" state={{myState}}>
          Contact
        </Link>
      </div>
    </>
  );
};
export default App;
